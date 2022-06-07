import React from "react";
import styled from "styled-components";
import Images from "../assets/images.jpg";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 4rem 7rem;
  background-color: blue;
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: red;
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: green;
  position: relative;
`;
const SmallContent = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
const BigContent = styled.div`
  font-size: 3rem;
  line-height: 0.9;
  margin-bottom: 1.5rem;
`;
const ParagraphDiv = styled.div`
  font-size: 1.3rem;
  line-height: 1.2;
`;
const Image = styled.img`
  width: 60%;
  height: 90%;
  object-fit: cover;
  border-radius: 1rem;
`;
const Box1 = styled.div`
  height: 20vh;
  width: 15vw;
  background-color: yellow;
  z-index: 1199;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 1rem;
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes floating {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 25px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
const Box2 = styled.div`
  height: 30vh;
  width: 15vw;
  background-color: yellow;
  z-index: 1199;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 1rem;

  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 25px); }
    100%   { transform: translate(0, -0px); } 
`;
const TechPage = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <SmallContent>Who We Are?</SmallContent>
        <BigContent>
          We Have Qualified Powerful Team To Do It More Faster, Better & Smarter
        </BigContent>
        <ParagraphDiv>
          Here at constbase we have qualified team who have worked on numerous
          technologies and frameworks and can provide you with top notch service
          , be it an existing project or anew one, our team is here to handle em
          all. <br />
          <br />
          We have worked on various technologies and have provided our clients
          the best work they can think of, our team has the best approach in
          finding solutions to various problems and creating the art that may
          serve our clients and take their business to the next level.
        </ParagraphDiv>
      </ContentDiv>
      <ImageDiv>
        <Box1 />
        <Image src={Images} />
        <Box2 />
      </ImageDiv>
    </MainDiv>
  );
};

export default TechPage;
