import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED, ALPHABET } from "../../constants.js";
import PlayAgainButton from "../PlayAgainButton";
import { checkGuess } from "../../game-helpers.js";

function lettersInitializer() {
  return new Map(ALPHABET.map((letter) => [letter, undefined]));
}

function answerInitializer() {
  const answer = sample(WORDS);
  console.info({ answer });
  return answer;
}

function Game() {
  const [answer, setAnswer] = React.useState(answerInitializer);
  console.info({ answer });
  const [guesses, setGuesses] = React.useState([]);
  const [state, setState] = React.useState("progress");

  const [letters, setLetters] = React.useState(lettersInitializer);

  function resetGame() {
    setAnswer(answerInitializer());
    setGuesses([]);
    setState("progress");
    setLetters(lettersInitializer());
  }

  function recordGuess(guess) {
    const newGuess = checkGuess(guess, answer);

    const newLetters = new Map(letters);
    for (const { letter, status } of newGuess) {
      newLetters.set(letter.toUpperCase(), status);
    }
    setLetters(newLetters);

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setState("lost");
    }
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput recordGuess={recordGuess} disabled={state !== "progress"} />
      {state === "won" ? (
        <WonBanner numberOfGuesses={guesses.length} />
      ) : state === "lost" ? (
        <LostBanner answer={answer} />
      ) : undefined}
      <Keyboard letters={letters} />
      {state !== "progress" && <PlayAgainButton resetGame={resetGame} />}
    </>
  );
}

export default Game;
