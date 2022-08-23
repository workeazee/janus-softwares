import React from "react";
import styled from "styled-components";
import Cards from "../page-components/Cards";
import { Color } from "./Footer";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;

  @media (max-width: 900px) {
    margin-top: 3rem;
    height: auto;
  }
  @media (max-width: 650px) {
    align-items: flex-start;
    height: 160vh;
  }
`;
const MainHeading = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin: 0;
  font-family: "Lora", sans-serif;
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;
const Box = styled.div`
  width: 50%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`;
const Paragraph = styled.p`
  color: #fff;
  font-family: "Lora", sans-serif;
  font-size: 1.5rem;

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

const Technologies = (props) => {
  return (
    <MainDiv ref={props.techRef}>
      <MainHeading>Top Technologies We Work On</MainHeading>
      <Box>
        <Paragraph>
          Providing you with the cutting <Color>edge solutions</Color> that the
          tech world has to offer. Here are some of the{" "}
          <Color>latest tech</Color> that we thrive on .
        </Paragraph>
      </Box>
      <Cards />
    </MainDiv>
  );
};

export default Technologies;
