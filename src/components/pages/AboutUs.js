import React from "react";
import styled from "styled-components";
import About from "../../images/About.svg";

const MainDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 600px) {
    margin-top: 2.5rem;
  }
`;
const LeftDiv = styled.div`
  height: 100vh;
  width: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 4rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding-left: 1rem;
    padding-top: 2rem;
    justify-content: flex-start;
  }
  @media (max-width: 650px) {
    height: 50vh;
  }
`;
const MediumText = styled.h3`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
const LargeText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 3rem;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`;

const RightDiv = styled.div`
  height: 100vh;
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
  @media (max-width: 650px) {
    height: 20vh;
  }
`;
const Image = styled.img`
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
const Color = styled.span`
  color: turquoise;
`;

const AboutUs = props => {
  return (
    <MainDiv ref={props.aboutRef} >
      <LeftDiv>
        <MediumText>
          <Color>Who We Are?</Color>
        </MediumText>
        <LargeText>
          We Have <Color>Qualified Powerful Team</Color> To Do It More Faster,
          Better & Smarter
        </LargeText>
        <MediumText>
          Here at <Color>Janus Softwares</Color> we have qualified team who have
          worked on numerous technologies and frameworks and can provide you
          with top notch service , be it an existing project or anew one, our
          team is here to handle em all.{" "}
          <Color>
            We have worked on various technologies and have provided our clients
            the best work they can think of
          </Color>
          , our team has the best approach in finding solutions to various
          problems and creating the art that may serve our clients and take
          their business to the next level.
        </MediumText>
      </LeftDiv>
      <RightDiv>
        <Image src={About} />
      </RightDiv>
    </MainDiv>
  );
};

export default AboutUs;
