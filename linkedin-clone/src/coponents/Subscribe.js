import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoImg.svg";
import "./subscribe.css";
function Subscribe() {
  const navigate = useNavigate();
  const returnPage = () => {
    navigate("/");
  };
  const inscrire = () => {
    console.log("clicked!!");
  };
  return (
    <div className="subContainer">
      <div className="subItem">
        <img src={logo} alt="" onClick={returnPage} />
        <p>Tirez le meilleur parti de votre vie professionnelle</p>
        <button onClick={inscrire}>s inscrire avec google</button>
      </div>
    </div>
  );
}

export default Subscribe;
