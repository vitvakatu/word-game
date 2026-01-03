import React from "react";

function Key({ children, status }) {
  const className = status != null ? `keyboard-key ${status}` : "keyboard-key";
  return <div className={className}>{children}</div>;
}

export default Key;
