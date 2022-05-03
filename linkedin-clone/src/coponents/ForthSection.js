import React from "react";
import thirdsection from "../assets/thirdsection1.svg";
import thirdsection2 from "../assets/thirdsection2.svg";
import "./forthSection.css";
function ForthSection() {
  return (
    <div>
      <div className="forth-container">
        <div className="leftSection">
          <img src={thirdsection} alt="" />
          <p>Connectez-vous avec des personnes qui peuvent vous aider</p>
          <button>Cherches des connaissances</button>
        </div>
        <div className="rightSection">
          <img src={thirdsection2} alt="" />
          <p>
            Appropriez-vous les compétences dont vous avez besoin pour réussir
          </p>
          <button>Explorer</button>
        </div>
      </div>
      <div className="lastSection">
        <p>
          Rejoignez vos collègues, camarades de classe et amis sur LinkedIn.
        </p>
        <button>Commencer</button>
      </div>
    </div>
  );
}

export default ForthSection;
