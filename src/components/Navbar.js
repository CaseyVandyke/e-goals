import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav-container">
      <img className="logo" src="#" alt="logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
      <div className="sign-container">
        <button className="sign-up" href="#">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Navbar;
