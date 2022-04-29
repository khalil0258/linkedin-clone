import React from "react";
import "./HeaderLeftElement.css";

function HeaderLeftElement(props) {
  return (
    <div className="headerElement">
      <img src={props.img} alt="" />

      <h5>{props.text}</h5>
    </div>
  );
}

export default HeaderLeftElement;

// =============
{
 
}
