import React, { useState } from "react";
import { Counter } from "./Counter";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter inicialCount={0}></Counter>
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toogle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
