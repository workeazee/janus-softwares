import React from "react";
import styled from "styled-components";
import Images from "../assets/images.jpg";
import { FiRefreshCw } from "react-icons/fi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { CgSearchFound } from "react-icons/cg";
import '../styles/globals.css';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 4rem 7rem;

  @media (max-width: 1100px) {
    padding: 4rem 2rem;
  }
`;
const SmallHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: turquoise;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 100%;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const Flex2 = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 100%;
  @media (max-width: 950px) {
    flex-direction: column!important;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 40%;
  height: 100%;
  font-size: 3rem;
  line-height: 1;
  padding-top: 1.5rem;
  position: relative;

  @media (max-width: 950px) {
    width: 100%;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  position: relative;
  margin-left: 2rem;

  @media (max-width: 950px) {
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    margin-left: 0;
  }
`;
const Image = styled.img`
  width: 80%;
  height: 60%;
  object-fit: cover;
  border-radius: 1rem;
  margin-top: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;
const Paragraph = styled.div`
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;
const Box1 = styled.div`
  height: 20vh;
  width: 15vw;
  z-index: 1199;
  position: absolute;
  bottom: 0;
  left: -2rem;
  border-radius: 1rem;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  background: rgba(0,49.8,100,0.25);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
  backdrop-filter: blur(3.8px);
  -webkit-backdrop-filter: blur(3.8px);
  border-radius: 10px;

  @keyframes float {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(25px, 0);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
const Tile = styled.div`
  height: 90%;
  width: 40%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
  }
`;
const Heading = styled.div`
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    align-self: center;
  }
`;
const ParagraphSmall = styled.div`
  color: grey;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    align-self: center;
    text-align: center;
  }
`;
const AboutPage = () => {
  return (
    <MainDiv>
      <SmallHeader>Why Choose Us?</SmallHeader>
      <Flex>
        <ContentDiv>
          <Paragraph>Make Work Productive & Get Faster Solution</Paragraph>
          <Image src={Images} alt="images" />
          <Box1 />
        </ContentDiv>
        <ImageDiv>
          <Flex2>
            <Tile>
              <FiRefreshCw color="#ffcbcb" className="icons"/>
              <Heading>Advanced Analysis</Heading>
              <ParagraphSmall>
                We handle things by first analyzing the problem and then taking
                the best approach to reach the solution.
              </ParagraphSmall>
            </Tile>
            <Tile>
              <BsFillFileEarmarkArrowDownFill color="#007fff" className="icons"/>
              <Heading>Optimisation</Heading>
              <ParagraphSmall>
                Every line of code we write is properly optimized so our clients
                may never face any unwanted glitches.
              </ParagraphSmall>
            </Tile>
          </Flex2>
          <Flex2>
            <Tile>
              <BiTime color="#90ee90" className="icons"/>
              <Heading>On Time</Heading>
              <ParagraphSmall>
                Things may seem a little swingy sometimes but our promise to
                deliver does not waver a speck.
              </ParagraphSmall>
            </Tile>
            <Tile>
              <CgSearchFound color="#ce8cf8" className="icons"/>
              <Heading>Continous Testing</Heading>
              <ParagraphSmall>
                Work we do here is tested continuously so that the chances of
                clingy bugs is reduced to null.
              </ParagraphSmall>
            </Tile>
          </Flex2>
        </ImageDiv>
      </Flex>
    </MainDiv>
  );
};

export default AboutPage;
