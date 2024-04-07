import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //  actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="h-screen dark:bg-darkBackground">
        <div className="p-1 flex justify-center dark:text-darkText">
          <ThemeSwitcher /> switch theme
        </div>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default App;
