import React from "react";

const Feactures = () => {
  return (
    <>
      <section className="feature-section">
        <div className="container">
          <div className="feature-wrapper">
            <div className="feature-details">
              <h2>Your peace of mind is our top priority</h2>
              <p>
                Here’s how we’re helping you feel confident welcoming guests:
              </p>
              <div className="span-icon">
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    Set house rules guest must agree to before they stay
                  </span>
                </i>
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    Request damage deposits for extra security
                  </span>
                </i>
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    Report guest misconduct if something goes wrong
                  </span>
                </i>
                <i className="fa fa-check-circle-o" aria-hidden="true">
                  <span className="spanColor">
                    Access 24/7 support in 43+ languages
                  </span>
                </i>
              </div>
              <div className="btn-list btn-col">
                <a href="#">Learn more</a>
              </div>
            </div>
            <div className="feature-image">
              <img src="./images/hotel/4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feactures;
