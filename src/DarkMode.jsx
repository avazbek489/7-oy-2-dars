import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function DarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center mt-5">
      <label className="cursor-pointer flex items-center gap-2">
        <span>{theme == "light" ? "Light Mode" : "Dark Mode"}</span>
        <input
          type="checkbox"
          className="toggle toggle-lg"
          onChange={toggleTheme}
          checked={theme == "dark"}
        />
      </label>
    </div>
  );
}

export default DarkMode;
