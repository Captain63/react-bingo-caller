import './App.css';
import { useState } from "react";
import generateRandomNum from "./utils/generateRandomNum";
import generateBingoNums from "./utils/generateBingoNums";

function App() {
  const [bingoState, setBingoState] = useState({ currentNum: '', bingoNums: generateBingoNums() });

  const updateCurrent = () => {
    const index = generateRandomNum(bingoState.bingoNums.length);

    setBingoState({
      ...bingoState,
      currentNum: bingoState.bingoNums.splice(index, 1)
    })

    console.log(bingoState.bingoNums.length);
  };

  const validate = () => {
    return bingoState.bingoNums.length === 0;
  }

  return (
    <header>
      <h1>Let's Call Some Bingo Numbers</h1>
      <button onClick={updateCurrent} disabled={validate()}>Generate Bingo Number</button>
      {validate() && <p><strong>All numbers called!</strong></p>}
      <h2>{bingoState.currentNum}</h2>
    </header>
  );
}

export default App;
