import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import { checkGuess } from "../../game-helpers.js";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function recordGuess(guess) {
    const newGuess = checkGuess(guess, answer);
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput recordGuess={recordGuess} />
    </>
  );
}

export default Game;
