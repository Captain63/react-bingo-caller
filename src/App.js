import './App.css';
import { useState } from "react";
import generateRandomNum from "./utils/generateRandomNum";
import generateBingoNums from "./utils/generateBingoNums";

const App = () => {
  const bingoNums = generateBingoNums();

  const [bingoState, setBingoState] = useState({ currentNum: '', bingoNums: bingoNums, pastNums: [] });

  const updateCurrent = () => {
    const index = generateRandomNum(bingoState.bingoNums.length);

    if (bingoState.currentNum) {
      setBingoState({
        ...bingoState,
        pastNums: bingoState.pastNums.unshift(bingoState.currentNum)
      })
    }

    setBingoState({
      ...bingoState,
      currentNum: bingoState.bingoNums.splice(index, 1)
    })

    console.log(bingoState.bingoNums.length);
  };

  const validate = () => {
    return bingoState.bingoNums.length === 0;
  }

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
          {validate() && <p>All numbers called!</p>}
          <div className="mb-4">
            <button onClick={updateCurrent} disabled={validate()}>Generate Bingo Number</button>
            {bingoState.currentNum && <button onClick={reset}>Restart</button>}
          </div>
          {bingoState.currentNum && (
          <div>
            <h2 className="current-border p-3">Current Num: {bingoState.currentNum}</h2>
            <h4>Numbers Remaining: {bingoState.currentNum ? 74 - bingoState.pastNums.length : 75}</h4>
          </div>
          )}
        </section>
        {bingoState.pastNums.length > 0 && (
          <section>
            <h4>Past Numbers</h4>
            <ul className="past-numbers-ul">
              {bingoState.pastNums.map((num, i) => <li key={i}>{num}</li>)}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
