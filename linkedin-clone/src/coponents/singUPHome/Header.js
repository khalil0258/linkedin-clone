import React from "react";
// import styled from "styled-components";
import logoImg from "../../assets/logoImg.svg";
import HeaderLeftElement from "./subComponents/HeaderLeftElement";
import compassImg from "../../assets/compass.svg";
import bagImg from "../../assets/bagImg.svg";
import peopleImg from "../../assets/peopleImg.svg";
import journalImg from "../../assets/journalImg.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navigation">
      {/* right header */}
      <div className="imgContainer">
        <img src={logoImg} alt="" />
      </div>
      {/* left header */}
      <div className="leftHeader">
        <HeaderLeftElement img={compassImg} text="Navigate" />
        <HeaderLeftElement img={peopleImg} text="Personnes" />
        <HeaderLeftElement img={journalImg} text="Linkedin Learning" />
        <HeaderLeftElement img={bagImg} text="Offre d emploie" />

        <div className="subscription">
          <Link to="/subscription">
            <a href="">Sinscrire</a>
          </Link>
          <button>S identifier</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
