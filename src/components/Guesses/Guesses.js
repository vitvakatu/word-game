import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((idx) => {
        return <Guess key={idx} letters={guesses[idx] ?? []} />;
      })}
    </div>
  );
}

export default Guesses;
