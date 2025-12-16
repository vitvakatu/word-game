import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ letters }) {
  return (
    <p className="guess">
      {range(5).map((idx) => (
        <Cell
          key={idx}
          letter={letters[idx] ? letters[idx].letter : undefined}
          status={letters[idx] ? letters[idx].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
