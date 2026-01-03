import React from "react";

function PlayAgainButton({ resetGame }) {
  return (
    <button className="play-again" onClick={resetGame}>
      Play Again 🔄
    </button>
  );
}

export default PlayAgainButton;
