import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #d2d2d2;
  height: 50vh;
  width: 100vw;
  padding: 0 1.5rem;
  position: relative;
  margin: 0 auto;
`;
const NewsLetterModal = styled.div`
  height: 20vh;
  width: 75%;
  background-color: yellow;
  z-index: 9999;
  transform: translateY(-10vh);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
`;
const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Email = styled.div`
  height: 100%;
  width: 60%;
  // background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainHeading = styled.h3``;
const SmallParagraph = styled.p``;
const Input = styled.input`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid black;
  height: 3rem;
`;
const Button = styled.button``;
const Footer = () => {
  return (
    <MainDiv>
      <NewsLetterModal>
        <Subscribe>
          <MainHeading>Subscribe Our Newsletter</MainHeading>
          <SmallParagraph>
            Get updates on the amazing work we do at constbase and to get
            notified on the discounted services that we offer
          </SmallParagraph>
        </Subscribe>
        <Email>
          <Input type="text" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </Email>
      </NewsLetterModal>
    </MainDiv>
  );
};

export default Footer;
