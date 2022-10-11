import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/quiz-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg header  navbar-light text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" width="30" height="24" />
        </Link>
        Quiz Hunter
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistics">
                Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    //  <nav className="header">
    //   <img src={logo} width={50} height={50} alt="" />
    //   <div className="text-color">
    //     <h2>Quiz Hunter</h2>
    //   </div>
    //   <div>
    //     <Link to="/">Home</Link>
    //     <Link to="/statistics">Statistics</Link>
    //     <Link to="/blog">Blog</Link>
    //   </div>
    // </nav>
  );
};

export default Header;
