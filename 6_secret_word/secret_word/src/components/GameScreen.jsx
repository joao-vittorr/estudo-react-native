import React from "react";
import "./GameScreen.css";

const GameScreen = ({ verifyLetter }) => {
  return (
    <div className="game-screen">
      <p className="points">
        <span>Pontuação: </span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span> </span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar a palabvra:</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            maxLength="1"
            required
            onChange={(e) => console.log(e.target.value)}
          />
          <button onClick={verifyLetter}>Verificar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span className="wrongLetter">B</span>
      </div>
    </div>
  );
};

export default GameScreen;
