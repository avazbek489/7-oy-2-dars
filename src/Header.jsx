import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between bg-slate-400 p-4">
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
    </div>
  );
}

export default Header;
