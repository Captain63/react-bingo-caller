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
    <>
      <header>
        <h1>Let's Call Some Bingo Numbers</h1>
      </header>
      <section>
        <button onClick={updateCurrent} disabled={validate()}>Generate Bingo Number</button>
        {bingoState.currentNum && <button onClick={reset}>Restart</button>}
        {validate() && <p><strong>All numbers called!</strong></p>}
        <h2>Current Num: {bingoState.currentNum}</h2>
        <h3>Numbers Remaining: {bingoState.currentNum ? 74 - bingoState.pastNums.length : 75}</h3>
      </section>
    </>
  );
}

export default App;
