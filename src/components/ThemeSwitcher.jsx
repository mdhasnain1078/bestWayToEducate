import React from "react";
import { useTheme } from "../context";

const ThemeSwitcher = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div
      className="relative inline-block w-12 h-6 rounded-full bg-gray-300 p-1 cursor-pointer select-none"
      onClick={onChangeBtn}
    >
      <div
        className={`absolute left-0 w-6 h-6 rounded-full bg-white shadow-md transition-transform transform ${
          themeMode === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>
      <span
        className={`absolute top-0 left-0 w-6 h-6 rounded-full bg-white flex justify-center items-center shadow-md text-gray-500 font-bold transition-transform transform ${
          themeMode === "dark" ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {themeMode === "dark" ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
