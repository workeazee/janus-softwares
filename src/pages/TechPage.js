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

  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 750px) {
    padding: 2rem 1rem;
  }
`;
const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: relative;
  z-index: -1;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
const SmallContent = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: turquoise;

  @media (max-width: 1100px) {
    font-size: 1.8rem;
  }
`;
const BigContent = styled.div`
  font-size: 3rem;
  line-height: 0.9;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    // font-size: 2.5rem;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
  }
`;
const ParagraphDiv = styled.div`
  font-size: 1.3rem;
  line-height: 1.2;
  color: grey;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
`;
const Image = styled.img`
  width: 80%;
  height: 90%;
  object-fit: cover;
  border-radius: 1rem;
`;
// const Box1 = styled.div`
//   height: 20vh;
//   width: 15vw;
//   z-index: 1199;
//   position: absolute;
//   top: 0;
//   left: 0;
//   border-radius: 1rem;
//   animation-name: floating;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;
//   background: rgba(0, 49.8, 100, 0.25);
//   box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
//   backdrop-filter: blur(3.8px);
//   -webkit-backdrop-filter: blur(3.8px);
//   border-radius: 10px;

//   @keyframes floating {
//     0% {
//       transform: translate(0, 0);
//     }
//     50% {
//       transform: translate(0, 25px);
//     }
//     100% {
//       transform: translate(0, -0px);
//     }
//   }

//   @media (max-width: 850px) {
//     height: 15vh;
//     width: 25vw;
//   }
// `;
// const Box2 = styled.div`
//   height: 30vh;
//   width: 15vw;
//   z-index: 1199;
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   border-radius: 1rem;
//   background: rgba(0,49.8,100,0.25);
//   box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
//   backdrop-filter: blur(3.8px);
//   -webkit-backdrop-filter: blur(3.8px);
//   border-radius: 10px;

//   animation-name: floating;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   animation-timing-function: ease-in-out;

//   @keyframes floating {
//     0% { transform: translate(0,  0px); }
//     50%  { transform: translate(0, 25px); }
//     100%   { transform: translate(0, -0px); } 
// `;
const TechPage = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <SmallContent>Who We Are?</SmallContent>
        <BigContent>
          We Have Qualified Powerful Team To Do It More Faster, Better & Smarter
        </BigContent>
        <ParagraphDiv>
          Here at Janus Softwares we have qualified team who have worked on numerous
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
        {/* <Box1 /> */}
        <Image src={Images} />
        {/* <Box2 /> */}
      </ImageDiv>
    </MainDiv>
  );
};

export default TechPage;
