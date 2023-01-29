import React, { useState } from "react";
import { Counter } from "./Counter";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");

  function setTheme(prevTheme) {
    return prevTheme === "red" ? "blue" : "red";
  }
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter inicialCount={0}></Counter>
      <button onClick={setTheme}>Toogle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
