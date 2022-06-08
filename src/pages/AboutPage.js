import React from "react";
import styled from "styled-components";
import Images from "../assets/images.jpg";
import { FiRefreshCw } from "react-icons/fi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { CgSearchFound } from "react-icons/cg";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 4rem 7rem;
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
`;
const Image = styled.img`
  width: 80%;
  height: 60%;
  object-fit: cover;
  border-radius: 1rem;
  margin-top: 2rem;
`;
const Paragraph = styled.div``;
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
`;
const Heading = styled.div`
  font-size: 2rem;
`;
const ParagraphSmall = styled.div`
  color: GREY;
  font-size: 1.1rem;
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
          <Flex>
            <Tile>
              <FiRefreshCw size={48} color="#ffcbcb"/>
              <Heading>Advanced Analysis</Heading>
              <ParagraphSmall>
                We handle things by first analyzing the problem and then taking
                the best approach to reach the solution.
              </ParagraphSmall>
            </Tile>
            <Tile>
              <BsFillFileEarmarkArrowDownFill size={48} color="#007fff"/>
              <Heading>Optimisation</Heading>
              <ParagraphSmall>
                Every line of code we write is properly optimized so our clients
                may never face any unwanted glitches.
              </ParagraphSmall>
            </Tile>
          </Flex>
          <Flex>
            <Tile>
              <BiTime size={48} color="#90ee90"/>
              <Heading>On Time</Heading>
              <ParagraphSmall>
                Things may seem a little swingy sometimes but our promise to
                deliver does not waver a speck.
              </ParagraphSmall>
            </Tile>
            <Tile>
              <CgSearchFound size={48} color="#ce8cf8"/>
              <Heading>Continous Testing</Heading>
              <ParagraphSmall>
                Work we do here is tested continuously so that the chances of
                clingy bugs is reduced to null.
              </ParagraphSmall>
            </Tile>
          </Flex>
        </ImageDiv>
      </Flex>
    </MainDiv>
  );
};

export default AboutPage;
