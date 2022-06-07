import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f6f4ff;
`;
const HeaderDiv = styled.div`
  height: 15vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  height: 85vh;
  padding-top: 1.5rem;
`;
const SmallText = styled.div`
  font-size: 1.2rem;
`;
const LargeText = styled.div`
  font-size: 3em;
`;
const Services = () => {
  return (
    <MainDiv>
      <HeaderDiv>
        <LargeText>Top Technologies We Work On</LargeText>
        <SmallText>
          Providing you with the cutting edge solutions that the tech world has
          to offer. Here are some of the latest tech that we thrive on .
        </SmallText>
      </HeaderDiv>
      <CardsDiv>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsDiv>
    </MainDiv>
  );
};

export default Services;
