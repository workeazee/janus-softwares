import React from "react";
import styled from "styled-components";
import HomeSVG from "../../images/Services.svg";
import homeBgLg from "../../images/gradients/gradientBgHome.png";
import scroll from "../../images/icons/scroll.svg";
import { Color } from "./Footer";
import { Box, Typography } from "@mui/material";

const MainDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: normal;
    margin-bottom: 2rem;
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
  z-index: 999;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0;
    justify-content: normal;
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
  z-index: 999;

  @media (max-width: 1200px) {
    width: 80%;
    padding-right: 0;
    padding-top: 2rem;
    align-items: center;
    justify-content: flex-start;
  }
`;
const Image = styled.img`
  width: 32rem;
  height: 31rem;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const HeadingOne = styled.h1`
  color: #fff;
  margin: 0;
  line-height: 108%;
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 650px) {
    font-size: 1rem;
    text-align: center;
  }
`;
const HeadingTwo = styled.h2`
  color: #fff;
  line-height: 150.8%;
  font-weigt: 300;
  width: 40rem;
  font-size: 1.6rem;

  @media (max-width: 650px) {
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Home = (props) => {

  const executeScroll = (reference) => {
    reference.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      <MainDiv ref={props.homeRef}>
        <LeftDiv>
          <HeadingOne className="plus-jakarta-sans">
            Trust, <Color>Flexibility, </Color>Communication.
          </HeadingOne>
          <HeadingTwo className="plus-jakarta-sans">
            We get projects done! Partnering with you, we build relationships to
            help drive your business to the next level with the latest
            technologies, while reducing cost and mitigating risk at your end.
            We provide outsourced solutions which can be delivered with either
            time and materials or fixed price fee structures. We specialize in
            small to medium-sized solutions under $1 million.
          </HeadingTwo>
        </LeftDiv>
        <RightDiv>
          <Image src={HomeSVG} />
        </RightDiv>
      </MainDiv>
      <Box
        display={{ xs: "none", md: "flex" }}
        zIndex={999}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"absolute"}
        bottom={80}
        gap={0.5}
        ml={"auto"}
        mr={"auto"}
        left={0}
        right={0}
        textAlign={"center"}
        onClick={() => {executeScroll(props.aboutRef)}}
      >
        <img src={scroll} style={{ cursor: "pointer" }} />
        <Typography color={"#ffffff"} className="poppins-medium">
          Scroll Down
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
