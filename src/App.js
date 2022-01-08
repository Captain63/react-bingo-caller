import './App.css';
import { useState } from "react";
import generateRandomNum from "./utils/generateRandomNum";
import generateBingoNums from "./utils/generateBingoNums";

const App = () => {
  const [bingoState, setBingoState] = useState({ currentNum: '', bingoNums: generateBingoNums(), pastNums: [] });

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
        <h2>{bingoState.currentNum}</h2>
      </section>
    </>
  );
}

export default App;
