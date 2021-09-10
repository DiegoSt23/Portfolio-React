import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [themeStatus, setThemeStatus] = useState(true);

  const contextValue = {
    themeStatus,
    changeTheme() {
      setThemeStatus(!themeStatus)
    }
  };

  return <ThemeContext.Provider value={contextValue}>
    {children}
  </ThemeContext.Provider>
};

export default ThemeProvider

