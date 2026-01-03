import React from "react";
import Key from "../Key";
import { ALPHABET } from "../../utils.js";

function Keyboard({ letters }) {
  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard">
      {keys.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((key) => (
            <Key key={key} status={letters.get(key)}>
              {key}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
