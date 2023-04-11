import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-section">
          <div className="container">
            <div className="footer-section-content">
              <div className="footer-wrapper">
                <div className="footer-content">
                  <h6 className="h2-sizes">Sign up and start </h6>
                  <h6 className="h2-sizes">welcoming guests today!</h6>
                </div>
                <div className="footer-image">
                  <img src="./images/hotel/9.png" alt="" />
                </div>
              </div>
              <div className="footer-bar">
                <div className="footer-nav-bar">
                  <h5>Discover</h5>
                  <li>
                    <a className="a-tag" href="#">
                      Trust and Safety.
                    </a>
                  </li>
                </div>
                <div className="footer-nav-bar">
                  <h5>Useful Links</h5>
                  <li>
                    <a className="a-tag" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="a-tag" href="/register">
                      Sig Up
                    </a>
                  </li>
                  <li>
                    <a className="a-tag" href="login">
                      Log in
                    </a>
                  </li>
                </div>
                <div className="footer-nav-bar">
                  <h5>Help and communities</h5>
                  <li>
                    <a className="a-tag" href="">
                      Partner Help
                    </a>
                  </li>
                  <li>
                    <a className="a-tag" href="#">
                      Partner Community
                    </a>
                  </li>
                  <li>
                    <a className="a-tag" href="">
                      How-to videos
                    </a>
                  </li>
                </div>
              </div>
              <div className="footer-rigth">
                <div className="link">
                  <li>
                    <a className="a-tag" href="">
                      about
                    </a>
                  </li>
                  <span className="spanColor">|</span>
                  <li>
                    <a className="a-tag" href="#">
                      Privacy and Cookie Statement
                    </a>
                  </li>
                </div>

                <p>&#169; Copyright ebooking 2022</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
