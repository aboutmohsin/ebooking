import React from "react";

const ListedProperty = () => {
  return (
    <>
      <div className="list-property-count-section">
        <div className="container">
          <div className="property-count">
            <h2 className="h2-size">Number of list property</h2>
            <div className="property-count-wrapper">
              <div className="property-count-number">
                <h1>10K+</h1>
                <p>
                  Listings in 226 countries and territories across the globe
                </p>
              </div>
              <div className="property-count-number">
                <h1>100</h1>
                <p>Homes, apartments, and other unique places to stay</p>
              </div>
              <div className="property-count-number">
                <h1>10</h1>
                <p>Languages and dialects available on our site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedProperty;
