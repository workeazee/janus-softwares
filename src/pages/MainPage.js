import React from "react";
import styled from "styled-components";
import Logo from '../assets/janus.png'

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
  height: 90vh;
  width: 100vw;
  padding: 0 1.5rem;
`;
const TextDiv = styled.div`
  width: 60%;
  height: 80%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageDiv = styled.div`
  width: 40%;
  height: 80%;
`;
const Img = styled.img`
width: 100%;
height: 100%;
`;
const InTextBig = styled.h1``;
const InTextSmall = styled.h2``;
const MainPage = () => {
  return (
    <MainDiv>
      <TextDiv>
        <InTextBig></InTextBig>
        <InTextSmall></InTextSmall>
      </TextDiv>
      <ImageDiv>
        <Img src={Logo}/>
      </ImageDiv>
    </MainDiv>
  );
};

export default MainPage;
