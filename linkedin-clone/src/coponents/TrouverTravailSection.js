import React, { useState } from "react";
import bottomArrow from "../assets/bottomArrow.svg";
import "./TrouverTravail.css";
function TrouverTravailSection() {
  const [afficherLinks, setAfficheLinks] = useState(false);
  return (
    <div className="container">
      <div className="trouverTravail">
        {/* left section */}
        <div className="leftSection">
          <p>Trouvez votre travail ou votre stage ideal</p>
        </div>
        {/* right section */}
        <div className="rightSection">
          <p>SUGGESTIONS DE RECHERCHES </p>
          <div>
            <div className="linksContainer">
              <a href="#">Ingeniere </a>
              <a href="#">Developement commercial </a>
              <a href="#">Finance </a>
              <a href="#">Adjoint administratif </a>
              <a href="#">Vendeur</a>
              <a href="#">Service clients </a>
              <a href="#">Exploitation </a>
              <a href="#">Ingeniere </a>
              <a href="#">Technologies de l information </a>
              <a href="#">Marketing </a>
              <a href="#">Ressources humaines </a>
            </div>

            {afficherLinks && (
              <div className="linksContainer">
                <a href="#">Ingeniere </a>
                <a href="#">Developement commercial </a>
                <a href="#">Finance </a>
                <a href="#">Adjoint administratif </a>
                <a href="#">Vendeur</a>
                <a href="#">Service clients </a>
                <a href="#">Exploitation </a>
                <a href="#">Ingeniere </a>
                <a href="#">Technologies de l information </a>
                <a href="#">Marketing </a>
                <a href="#">Ressources humaines </a>
              </div>
            )}
          </div>
          <h4
            onClick={() => {
              setAfficheLinks((prev) => !prev);
            }}
          >
            Voir plus
            <img src={bottomArrow} alt="" />
          </h4>
        </div>
      </div>
      {/* publier votre offre d emploie  */}
      <div className="publierVotreOffre">
        <div className="leftSection">
          <p>Publiez votre offre d’emploi auprès de millions de personnes</p>
        </div>
        <div className="rightSection">
          <button>Publier une offre d emploie</button>
        </div>
      </div>
    </div>
  );
}

export default TrouverTravailSection;
