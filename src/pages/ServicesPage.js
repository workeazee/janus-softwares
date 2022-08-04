import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Data from "../components/Data";
import { useNav } from '../components/Header/customHooks/useNav';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 150vh;
  width: 100vw;
  background-color: #f6f4ff;
  z-index: 1 !important;

  @media (max-width: 1000px) {
    height: 210vh;
    justify-content: flex-start;
  }
  @media (max-width: 700px) {
    height: 365vh;
    justify-content: flex-start;
  }
`;
const HeaderDiv = styled.div`
  height: 15vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 900px) {
    width: 80vw;
  }
  @media (max-width: 600px) {
    width: 100vw;
  }
`;
const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  height: 85vh;
  padding-top: 1.5rem;
  z-index: 1;

  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 600px) {
    padding-top: 0;
  }
`;
const SmallText = styled.div`
  font-size: 1.2rem;

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const LargeText = styled.div`
  font-size: 3rem;

  @media (max-width: 900px) {
    font-size: 2.7rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-top: 2rem;
  }
`;
const Services = () => {
  const serviceRef = useNav("Technologies");
  return (
    <MainDiv id="techContainer" ref={serviceRef}>
      <HeaderDiv>
        <LargeText>Top Technologies We Work On</LargeText>
        <SmallText>
          Providing you with the cutting edge solutions that the tech world has
          to offer. Here are some of the latest tech that we thrive on .
        </SmallText>
      </HeaderDiv>
      <CardsDiv>
        {Data.map((item, index) => (
          <Card 
            key={index}
            icon={item.icon}
            name={item.name}
            description={item.description}
          />
        ))}
      </CardsDiv>
    </MainDiv>
  );
};

export default Services;
