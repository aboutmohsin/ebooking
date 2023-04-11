import React from "react";
import "./Amenities.css";
const Amenities = () => {
  return (
    <>
      <section className="amenities-section">
        <div className="container-fluid">
          <div className="service-title">
            <h5>Our Amenites</h5>
            <h2>Hoteling Amenites</h2>
          </div>
          <div className="amenites-wrapper">
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img
                  src="./images/Aminities/car-parking.png"
                  alt="car parking icon"
                />
                <h2>Free Parking</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img src="./images/Aminities/wifi.png" alt="wifi  icon" />
                <h2>Free wifi</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img src="./images/Aminities/gym.png" alt="car parking icon" />
                <h2>Free GYM</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img
                  src="./images/Aminities/protect.png"
                  alt="car parking icon"
                />
                <h2>Security</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img
                  src="./images/Aminities/Handicap.png"
                  alt="car parking icon"
                />
                <h2>Handicap Facilities</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img src="./images/Aminities/pet.png" alt="car parking icon" />
                <h2>Pet Allowed</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img
                  src="./images/Aminities/breakfast-1.png"
                  alt="break fast icon"
                />
                <h2>Free Breakfast</h2>
              </div>
            </div>
            <div className="amenites-wrap">
              <div className="amenites-cards">
                <img
                  src="./images/Aminities/call-center.png"
                  alt="call center icon"
                />
                <h2>Customer Service</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
