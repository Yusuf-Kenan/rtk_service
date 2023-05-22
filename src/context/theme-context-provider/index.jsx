import { createContext, useState } from "react";

const initValue = {};
export const ThemeContext = createContext(initValue);

export default function ThemeContextProvider(props) {
  const [theme, setTheme] = useState();
  const contextValue = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
