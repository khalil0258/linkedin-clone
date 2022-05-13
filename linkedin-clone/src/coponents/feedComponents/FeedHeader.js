import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import logoImg from "../../assets/logoImg.svg";
import HeaderLeftElement from "../../coponents/singUPHome/subComponents/HeaderLeftElement";
import compassImg from "../../assets/compass.svg";
import bagImg from "../../assets/bagImg.svg";
import peopleImg from "../../assets/peopleImg.svg";
import journalImg from "../../assets/journalImg.svg";
import SearchIcon from "@mui/icons-material/Search";
import "./FeedHeader.css";
function FeedHeader() {
  return (
    <div className="HeaderContainer">
      {/* left header */}
      <div className="leftHeader">
        <LinkedInIcon className="LinkedIcon" />
        <div className="inputHolder">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Rechercher" />
        </div>
      </div>
      <div className="RightHeader">
        <HeaderLeftElement img={compassImg} text="Navigate" />
        <HeaderLeftElement img={peopleImg} text="Personnes" />
        <HeaderLeftElement img={journalImg} text="Linkedin Learning" />
        <HeaderLeftElement img={bagImg} text="Offre d emploie" />
        <HeaderLeftElement text="Vous" />
      </div>
    </div>
  );
}

export default FeedHeader;
