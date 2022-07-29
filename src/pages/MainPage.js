import React from "react";
import styled from "styled-components";
import Logo from "../assets/janus.png";
import Image from "../assets/images.jpg";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90vw;
  padding: 0 1.5rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const TextDiv = styled.div`
  width: 55%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 3rem;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`;
const ImageDiv = styled.div`
  width: 30%;
  height: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
const InTextBig = styled.h1`
  font-size: 5rem;

  @media (max-width: 900px) {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;
const InTextSmall = styled.h2`
  font-size: 1.5rem;
  color: grey;

  @media (max-width: 900px) {
    font-size: 2rem;
    padding: 0;
    margin: 3rem 0 0 0;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
const MainPage = () => {
  return (
    <MainDiv>
      <TextDiv>
        <InTextBig>Trust. Flexibility. Communication.</InTextBig>
        <InTextSmall>
          We get projects done! Partnering with you, we build relationships to
          help drive your business to the next level with the latest
          technologies, while reducing cost and mitigating risk at your end. We
          provide outsourced solutions which can be delivered with either time
          and materials or fixed price fee structures. We specialize in small to
          medium-sized solutions under $1 million.
        </InTextSmall>
      </TextDiv>
      <ImageDiv>
        <Img src={Image} />
      </ImageDiv>
    </MainDiv>
  );
};

export default MainPage;
