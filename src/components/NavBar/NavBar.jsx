import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <section className="property-header-section">
          <div className="container">
            <div className="nav-bar">
              <div className="logo">
                <a href="/">
                  <img src="./images/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="btn-list">
                <ul>
                  <li>
                    <a herf="/">Home</a>
                  </li>
                  <li>
                    <a herf="/dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a herf="/register">Register</a>
                  </li>
                  <li>
                    <a herf="/login">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
