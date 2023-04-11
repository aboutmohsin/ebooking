import React from "react";
import { TbBuildingWarehouse } from "react-icons/tb";
import { TfiImport } from "react-icons/tfi";

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
            <div className="benefits_icons">
              <TbBuildingWarehouse size={100} color="#00224F" />
            </div>
            <h2>List any type of property</h2>
            <p>
              Apartments to villas and everything in between can be listed for
              free.
            </p>
          </div>
          <div className="benefits_right">
            <div className="benefits_icons">
              <TfiImport size={100} color="#00224F" />
            </div>

            <h2>Easily import details</h2>
            <p>
              To save you time, many of the details from your existing listings
              can be imported.
            </p>
          </div>
        </div>
        <div className="benefits_details">
          <div className="benefits_left">
            <div className="benefits_icons">
              <TbBuildingWarehouse size={100} color="#00224F" />
            </div>
            <h2>Step-by-step guidance</h2>
            <p>
              You’ll learn how our platform works, best practices, and things to
              watch out for.
            </p>
          </div>
          <div className="benefits_right">
            <div className="benefits_icons">
              <TfiImport size={100} color="#00224F" />
            </div>

            <h2>Unique discounts</h2>
            <p>
              Discounts on products and services that save time and improve the
              guest experience.
            </p>
          </div>
        </div>
        <div className="benefits_details">
          <div className="benefits_left">
            <div className="benefits_icons">
              <TbBuildingWarehouse size={100} color="#00224F" />
            </div>
            <h2>Enjoy more flexibility at no extra cost</h2>
            <p>
              With the Smart Flex Reservations program, your guests can enjoy
              the flexibility of free cancellation policies.
            </p>
          </div>
          <div className="benefits_right">
            <div className="benefits_icons">
              <TfiImport size={100} color="#00224F" />
            </div>

            <h2>Review Score</h2>
            <p>
              Your review score on third-party travel websites may be converted
              and then reflected on your Booking.com listing page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
