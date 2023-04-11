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
                <a href="#">
                  <img src="./images/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="btn-list">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
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
