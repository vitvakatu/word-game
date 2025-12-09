import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  const letters = [...value];
  return (
    <p className="guess">
      {range(5).map((idx) => (
        <span key={idx} className="cell">
          {letters[idx]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
