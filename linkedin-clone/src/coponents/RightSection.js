import React from "react";
import styled from "styled-components";
import Input from "./Input";

export default function RightSection() {
  return <BigContainer></BigContainer>;
}

const BigContainer = styled.div`
  width: auto;
  flex: 0.34;
  background-color: white;
  /* display: none; */
  max-height: 45vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
