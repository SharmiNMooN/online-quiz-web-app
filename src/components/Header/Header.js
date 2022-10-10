import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/quiz-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} width={50} height={50} alt="" />
      <div className="text-color">
        <h2>Quiz Hunter</h2>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
