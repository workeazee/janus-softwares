import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
  width: 33%;
  background-color: white;
  margin: 1rem;
  z-index: 0;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.26);
  transition: all 0.3s ease-in-out;
  width: calc((100% / 3.2) - 10px);

  &:hover {
    background-color: turquoise;
    transform: scale(1.05);
    color: white;
  }

  @media (max-width: 1000px) {
    width: calc(100% / 2.06 - 20px);
  }
  @media (max-width: 600px) {
    width: calc(100% / 1.02 - 20px);
  }
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 15vw;
  margin-bottom: 1rem;
`;
const ContentDiv = styled.div`
  text-align: center;
  font-weight: 500;
  color: grey;
  &:hover {
    color: white;
  }
`;
const Header = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
const Card = (props) => {
  return (
    <MainDiv>
      <IconDiv>
        {props.icon}
        <Header>{props.name}</Header>
      </IconDiv>
      <ContentDiv>
        {props.description}
      </ContentDiv>
    </MainDiv>
  );
};

export default Card;
