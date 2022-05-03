import React from "react";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";
import "./testimonials.css";
function Testimonials() {
  return (
    <div className="testimonialsContainer">
      <div className="buttons">
        <div className="precedent">
          <img src={arrowLeft} alt="" />
          <p>Precedent</p>
        </div>
        <div className="suivant">
          <p>Suivant</p>
          <img src={arrowRight} alt="" />
        </div>
      </div>
      <div className="carousel-container">
        <div className="slideContainer"></div>
      </div>
    </div>
  );
}

export default Testimonials;
