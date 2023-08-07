import React, { useState } from "react";

function Toggle() {
  const [isAct, setIsAct] = useState(false);

  const handleClick = () => {
    setIsAct(!isAct)
  }

  const color = isAct ? "red" : "white"

  return <button onClick={handleClick} style={{ background: color }}> {isAct ? "OFF" : "ON"}  </button>;
}

export default Toggle;
