import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

export const Counter = ({ inicialCount }) => {
  const [count, setCount] = useState(inicialCount);
  const style = useContext(ThemeContext);

  function decrementCount() {
    return setCount((prevCount) => prevCount - 1);
  }
  return (
    <>
      <button style={style} onClick={decrementCount}>
        -
      </button>
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </>
  );
};
