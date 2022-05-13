import styled from "styled-components";
import React from "react";
import "./HeaderLeftElement.css";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function HeaderLeftElement(props) {
  const user = auth.currentUser;
  const navigate = useNavigate();

  // console.log(user.displayName);
  return (
    <div
      className="headerElement"
      onClick={
        !props.img
          ? () => {
              signOut(auth).then(() => {
                navigate("/");
              });
            }
          : null
      }
    >
      {props.img && <img src={props.img} alt="" />}
      {!props.img && (
        <ImageContainer
          src={user.photoURL}
          // onClick={() => {
          //   signOut(auth);
          // }}
        />
      )}

      <h5>{props.text}</h5>
    </div>
  );
}

export default HeaderLeftElement;

// =============
const ImageContainer = styled.img`
  height: 1.7rem;
  width: 1.7rem;
  border-radius: 50%;
  /* background-color: gray;
  position: relative;
  &::after {
    content: "K";
    position: absolute;
    color: white;
    top: 0.45rem;
    left: 0.6rem;
  } */
`;
