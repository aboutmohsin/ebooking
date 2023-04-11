import React from "react";

const Guest = () => {
  return (
    <>
      <section className="feature-section">
        <div className="container">
          <div className="feature-wrapper">
            <div className="feature-details">
              <h2 className="h2-size">Get to know your guests</h2>
              <p>
                No matter where they’re from, our guests share a few
                similarities.:
              </p>
              <div className="span-icon">
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    75% of nights booked are by guests with five or more
                    previous bookings
                  </span>
                </i>
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    68% of nights booked are by families and couples
                  </span>
                </i>
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    42% of nights booked are for properties other than hotels
                  </span>
                </i>
              </div>
              <div className="btn-list btn-col">
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="feature-image">
              <img src="./images/hotel/8.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guest;
