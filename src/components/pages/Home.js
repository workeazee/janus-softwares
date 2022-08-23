import React from "react";
import styled from "styled-components";
import HomeSVG from "../../images/Home.svg";
import { Color } from './Footer';

const MainDiv = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const LeftDiv = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-left: 4rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding-left: 1rem;
    padding-top: 2rem;
  }
`;
const RightDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 4rem;

  @media (max-width: 1200px) {
    width: 80%;
    padding-right: 0;
    padding-top: 2rem;
    align-items: center;
    justify-content: flex-start;
  }
`;
const Image = styled.img`
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const HeadingOne = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 0;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;
const HeadingTwo = styled.h2`
  color: #fff;
  font-family: "Lora", sans-serif;
  font-weight: 300;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

const Home = props => {

  return (
    <MainDiv ref={props.homeRef} >
      <LeftDiv>
        <HeadingOne>Trust.<Color>Flexibility.</Color></HeadingOne>
        <HeadingOne>Communication.</HeadingOne>
        <HeadingTwo>
          We get projects done! Partnering with you, we build relationships to
          help drive your business to the next level with the latest
          technologies, while reducing cost and mitigating risk at your end. We
          provide outsourced solutions which can be delivered with either time
          and materials or fixed price fee structures. We specialize in small to
          medium-sized solutions under $1 million.
        </HeadingTwo>
      </LeftDiv>
      <RightDiv>
        <Image src={HomeSVG} />
      </RightDiv>
    </MainDiv>
  );
};

export default Home;
