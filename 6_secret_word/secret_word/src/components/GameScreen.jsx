import React from "react";
import "./GameScreen.css";

const GameScreen = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
};

export default GameScreen;
