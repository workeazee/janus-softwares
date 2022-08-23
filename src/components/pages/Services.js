import React from "react";
import styled from "styled-components";
import ServiceSVG from "../../images/Services.svg";
import Service from "../page-components/Service";
import Data from "../page-components/ServiceData";
import { Color } from "./Footer";
const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
  }
`;
const LeftDiv = styled.div`
  height: 100vh;
  width: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4rem;

  @media (max-width: 1200px) {
    width: 70%;
    padding-left: 1rem;
    padding-top: 2rem;
    width: 100%;
  }
  @media (max-width: 900px) {
    margin-bottom: 3rem;
  }
`;
const MediumText = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
const LargeText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const RightDiv = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding-right: 0;
    padding: 0;
  }
`;
const Image = styled.img`
  @media (max-width: 1200px) {
    width: 50%;
    margin: auto;
  }
`;
const Upper = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    height: 10vh;
  }
  @media (max-width: 650px) {
    margin: 1rem;
    margin-bottom: 2rem;
  }
`;
const Lower = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 650px) {
    height: 35vh;
    justify-content: space-between;
  }
`;

const Services = props => {
  return (
    <MainDiv ref={props.servicesRef} >
      <LeftDiv>
        <MediumText><Color>Why Choose Us?</Color></MediumText>
        <LargeText>Make Work Productive & Get Faster Solution</LargeText>
        <Image src={ServiceSVG} />
      </LeftDiv>
      <RightDiv>
        <Upper>
          {Data.slice(0, 2).map((item) => {
            return (
              <Service
                key={item.id}
                name={item.name}
                icon={item.icon}
                description={item.description}
              />
            );
          })}
        </Upper>
        <Lower>
          {Data.slice(2, 4).map((item) => {
            return (
              <Service
                key={item.id}
                name={item.name}
                icon={item.icon}
                description={item.description}
              />
            );
          })}
        </Lower>
      </RightDiv>
    </MainDiv>
  );
};

export default Services;
