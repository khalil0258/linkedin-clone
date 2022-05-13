import React from "react";
import styled from "styled-components";

import BookmarkIcon from "@mui/icons-material/Bookmark";
export default function InfosFeed() {
  return (
    <InfosContainer>
      <FirstContainer>
        <ImgContainer>
          <img src={require("../assets/feedHead.jpg")} alt="" />
        </ImgContainer>
        <DescriptionContainer>
          <img src={require("../assets/feedHead.jpg")} alt="" />
          <div>
            <h3>Hadjaz brahim khalil</h3>
            <p>Jr web developer </p>
          </div>
        </DescriptionContainer>
        <Relation>
          <div>
            <p>relation</p>
            <p style={{ color: "blue" }}>3</p>
          </div>
          <p>Developer votre reseau</p>
        </Relation>
        <Element>
          <BookmarkIcon />
          <p>Mes elements</p>
        </Element>
      </FirstContainer>
    </InfosContainer>
  );
}
const Element = styled.div`
  display: flex;
  padding: 0.7rem;
  align-items: center;
  font-size: 0.7rem;
  cursor: pointer;
  p {
    margin-left: 5px;
  }
  /* .MuiSvgIcon {
    height: 10px;
    width: 10px;
  } */
`;
const InfosContainer = styled.div`
  width: 12.8rem;
  background-color: white;
  border-radius: 3px;
  text-transform: capitalize;
  max-height: 39vh;
  @media (max-width: 768px) {
    width: auto;
    flex: 1;
  }
`;
const Relation = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.7rem;
  border-bottom: 0.3px solid rgb(239, 239, 239);

  p {
    font-size: 0.8rem;
    color: black;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div p {
    font-size: 0.7rem;
    font-weight: 100;
    color: slategrey;
  }
`;
const FirstContainer = styled.div`
  /* height: auto; */
  width: 100%;
`;

const ImgContainer = styled.div`
  height: 3.5rem;
  /* background-color: blue */
  width: 100%;
  border-radius: 3px 3px 0 0;
  img {
    border-radius: 3px 3px 0 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const DescriptionContainer = styled.div`
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 0.3px solid rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    top: -2rem;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    position: absolute;
  }

  div {
    padding-top: 3rem;
  }

  div h3 {
    cursor: pointer;
    font-size: 0.9rem;
    /* margin-bottom: 3px; */
  }
  div h3:hover {
    text-decoration: underline;
  }
  p {
    font-size: 0.65rem;
    color: slategrey;
    font-weight: 100;
  }
`;
