import React from "react";
import "./Benefits.css";
const Benefits = () => {
  return (
    <div className="benefits-section">
      <div className="container">
        <div className="benefits_title">
          <h2>Benefits of working with us</h2>
        </div>
        <div className="benefits_details">
          <div className="benefits_left">
            <h2>List any type of property</h2>
            <p>
              Apartments to villas and everything in between can be listed for
              free.
            </p>
          </div>
          <div className="benefits_right">
            <h2>Easily import details</h2>
            <p>
              To save you time, many of the details from your existing listings
              can be imported.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
