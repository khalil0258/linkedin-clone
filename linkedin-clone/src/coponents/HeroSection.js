import React from "react";
import "./HeroSection.css";
import rightArrow from "../assets/rightArrow.svg";
import sectionHero from "./../assets/sectionHero1.svg";
function HeroSection() {
  return (
    <div className="heroSection">
      {/* right section? */}
      <div className="rightHeroSection">
        <p>Bienvenue dans votre communauté professionnelle</p>
        <div className="buttons">
          <div className="btn ">
            <h3>Cherche un emploie</h3>
            <img src={rightArrow} alt="" />
          </div>
          <div className="btn ">
            <h3>Trouvez une personne que vous connaissez </h3>
            <img src={rightArrow} alt="" />
          </div>
          <div className="btn ">
            <h3>Aprendre une nouvelle competence</h3>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      {/* left section */}
      <div className="leftHeroSection">
        <img src={sectionHero} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
