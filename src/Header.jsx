import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center justify-between p-4 ${
        theme == "light" ? "bg-slate-400" : "bg-gray-800"
      }`}
    >
      <Link className="btn" to="/">
        Todo
      </Link>
      <Link className="btn" to="/form">
        Form
      </Link>
      <Link className="btn" to="/api">
        Api
      </Link>
      <Link className="btn" to="/counter">
        Counter
      </Link>
      <Link className="btn" to="/darkmode">
        Dark Mode
      </Link>
      <label className="flex items-center gap-2 cursor-pointer">
        <span>{theme == "light" ? "Light" : "Dark"}</span>
        <input
          type="checkbox"
          className="toggle toggle-sm"
          onChange={toggleTheme}
          checked={theme == "dark"}
        />
      </label>
    </div>
  );
}

export default Header;
