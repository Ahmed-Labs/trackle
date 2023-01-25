import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext(false);

function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  function toggleFunction() {
    setToggle(!toggle);
  }
  useEffect(() => {
    const localTheme = localStorage.getItem("localTheme");
    if (localTheme == "true") {
      setToggle(true);
    }
    if (localTheme == "false") {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localTheme", toggle);
  }, [toggle]);

  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeProvider };
