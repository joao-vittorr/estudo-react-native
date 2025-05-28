import { useState } from "react";
import "./App.css";

import { useCallback, useEffec} from "react";

// import data
import {wordsList} from "./data/word";

// import components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  return (
    <>
      {gameStage === "start" && <StartScreen/>}
      {gameStage === "game" && <GameScreen secretWord={secretWord} setGameStage={setGameStage} />}
      {gameStage === "end" && <EndScreen secretWord={secretWord} setGameStage={setGameStage} />}  

    </>
  );
}

export default App;
