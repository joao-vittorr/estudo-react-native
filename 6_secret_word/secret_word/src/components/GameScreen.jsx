import React from "react";
import "./GameScreen.css";

const GameScreen = ({
  verifyLetter,
  picketWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div className="game-screen">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory} </span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => {
          return guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          );
        })}
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
        {wrongLetters.length > 0 ? (
          wrongLetters.map((letter, i) => (
            <span key={i} className="wrongLetter">
              {letter},{" "}
            </span>
          ))
        ) : (
          <p>Nenhuma letra utilizada ainda.</p>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
