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

  // Start the game
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  //Process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // Retry the game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen retry={retry} />}  

    </>
  );
}

export default App;
