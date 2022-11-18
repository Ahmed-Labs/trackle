import React, { createContext, useState } from "react";

const ThemeContext = createContext(false);

function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  function toggleFunction() {
    setToggle(!toggle);
  }
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
