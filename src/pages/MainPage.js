import React from "react";
import styled from "styled-components";
import Logo from "../assets/janus.png";
import Image from "../assets/images.jpg";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
  height: 90vh;
  width: 90vw;
  padding: 0 1.5rem;
  margin: 0 auto;
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
  width: 30%;
  height: 80%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
const InTextBig = styled.h1`
  font-size: 5rem;
`;
const InTextSmall = styled.h2`
  font-size: 1.5rem;
`;
const MainPage = () => {
  return (
    <MainDiv>
      <TextDiv>
        <InTextBig>Lorem Ipsum is simply dummy text of the printing</InTextBig>
        <InTextSmall>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
        </InTextSmall>
      </TextDiv>
      <ImageDiv>
        <Img src={Image} />
      </ImageDiv>
    </MainDiv>
  );
};

export default MainPage;
