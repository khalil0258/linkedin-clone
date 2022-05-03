import React from "react";
import "./footer.css";
import Logo from "../assets/logoImg.svg";
function Footer() {
  return (
    <div className="footer-container">
      <div className="item item1">
        <img src={Logo} alt="" />
      </div>
      <div className="item item2">
        <h4>Général</h4>
        <div className="linksContainer">
          <p>S inscrire</p>
          <p>Assistance clientele</p>
          <p>A propos</p>
          <p>Press</p>
          <p>Blog</p>
          <p>Carrieres</p>
          <p>Developpeurs</p>
        </div>
      </div>
      <div className="item">
        <h4>Parcourir LinkedIn</h4>
        <div className="linksContainer">
          <p>Learning</p>
          <p>Emplois</p>
          <p>Salaire</p>
          <p>Mobile</p>
          <p>Services</p>
          <p>Produits</p>
        </div>
      </div>
      <div className="item">
        <h4>Business Solutions</h4>
        <div className="linksContainer">
          <p>Talent</p>
          <p>Marketing</p>
          <p>Ventes</p>
          <p>Learning</p>
        </div>
      </div>
      <div className="item">
        <h4>Annuaires </h4>
        <div className="linksContainer">
          <p>Membres</p>
          <p>Emploie</p>
          <p>Entreprises</p>
          <p>Selectionne</p>
          <p>Learning</p>
          <p>Posts</p>
          <p>Articles</p>
          <p>Ecoles </p>
          <p>Actualites</p>
          <p>Newsletters</p>
          <p>Services</p>
          <p>Preparation aux entretiens</p>
          <p>Produits</p>
          <p>Sujets de contenu</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
