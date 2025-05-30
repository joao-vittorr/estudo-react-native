import { useState } from "react";
import "./App.css";

import { useCallback, useEffec } from "react";

// import data
import { wordsList } from "./data/word";

// import components
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Pick a random word from the category
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  // Start the game
  const startGame = () => {
    setGameStage(stages[1].name);
    const { word, category } = pickWordAndCategory();

    // Create an array of letters
    const wordLetters = word.split("").map((l) => l.toLowerCase());

    //Fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
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
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <GameScreen
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <EndScreen retry={retry} />}
    </>
  );
}

export default App;
