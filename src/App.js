import './App.css';
import { useState } from "react";
import generateRandomNum from "./utils/generateRandomNum";
import generateBingoNums from "./utils/generateBingoNums";

const App = () => {
  // Create array of bingo numbers
  const bingoNums = generateBingoNums();

  // Create initial state with useState hook
  const [bingoState, setBingoState] = useState({ 
    currentNum: '', 
    bingoNums: bingoNums, 
    pastNums: [] 
  });

  // Call new bingo number
  const updateCurrent = () => {
    // Generate random index number
    const index = generateRandomNum(bingoState.bingoNums.length);

    // Add current number to start of past numbers array
    if (bingoState.currentNum) {
      setBingoState({
        ...bingoState,
        pastNums: bingoState.pastNums.unshift(bingoState.currentNum)
      })
    }

    // Splice value from array with random index and set to currentNum
    setBingoState({
      ...bingoState,
      currentNum: bingoState.bingoNums.splice(index, 1)
    })
  };

  // Returns true once all numbers have been pulled from bingoNums state array
  const finished = () => bingoState.bingoNums.length === 0;

  // Reset state values
  const reset = () => {
    setBingoState({
      currentNum: '',
      bingoNums: bingoNums,
      pastNums: []
    })
  }

  return (
    <div className="d-flex justify-content-center p-2 px-md-0">
      <div className="col-12 col-md-6">
        <header className="mb-4">
          <h1>Let's Call Some Bingo Numbers</h1>
        </header>
        <section>
          {/* Show finished message once all numbers are called */}
          {finished() && <p>All numbers called!</p>}
          <div className="mb-4">
            {/* Generate new bingo number */}
            <button onClick={updateCurrent} disabled={finished()}>Generate Bingo Number</button>
            {/* Restart call sequence -- displays once first number is created */}
            {bingoState.currentNum && <button onClick={reset}>Restart</button>}
          </div>
          {/* Render once first number has been called */}
          {bingoState.currentNum && (
            <div>
              <h2 className="current-border p-3">Current Num: {bingoState.currentNum}</h2>
              <h4>Numbers Remaining: {74 - bingoState.pastNums.length}</h4>
            </div>
          )}
        </section>
        {/* Only render once past numbers are stored in array */}
        {bingoState.pastNums.length > 0 && (
          <section>
            <h4>Past Numbers</h4>
            <ul className="past-numbers-ul">
              {/* Maps array of past numbers */}
              {bingoState.pastNums.map((num, i) => <li key={i}>{num}</li>)}
            </ul>
          </section>
        )}
        <footer>
          <p className="text-center">View my regular JavaScript bingo caller on <a className="text-decoration-none" href="https://github.com/Captain63/bingo-caller" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i> GitHub</a> and the <a className="text-decoration-none" href="https://captain63.github.io/bingo-caller" target="_blank" rel="noreferrer"><i className="fas fa-file"></i> live application</a>.</p>
          <p className="text-center">&copy; 2022 Stephen Roddewig</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
