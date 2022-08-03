import React from "react";
import styled from "styled-components";
import Image from "../assets/janus.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsChevronCompactRight } from "react-icons/bs";
import "../styles/globals.css";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: turquoise;
  height: 75vh;
  width: 100vw;
  padding: 0 1.5rem;
  position: relative;
  margin: 0 auto;
  margin-top: 8rem;
`;
const NewsLetterModal = styled.div`
  height: 28vh;
  width: 75%;
  z-index: 9999;
  transform: translateY(-10vh);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  background-color: #008080;
  padding: 1rem;

  @media (max-width: 1000px) {
    width: 95%;
    flex-direction: column;
    height: 20vh;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 28vh;
  }
`;
const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1.6rem;
  width: 60%;

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Email = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 80%;
    margin: auto;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: auto;
  }
`;
const MainHeading = styled.h4`
  margin: 0;
  font-weight: bold;
  color: white;

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const SmallParagraph = styled.p`
  margin: 0;
  font-weight: bold;
  color: white;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Input = styled.input`
  background-color: white !important;
  border-radius: 2rem 0 0 2rem !important;
  height: 3.5rem !important;
  margin: 0 !important;
  padding: 0 1.3rem !important;
  border: none !important;
`;
const Button = styled.button`
  background-color: #d2d2d2;
  border: none;
  border-radius: 0 2rem 2rem 0;
  height: 3.5rem;
  width: 10rem;
  background-color: turquoise;
  color: white;
  font-weight: bold;
`;
const FooterLower = styled.div`
  height: 35vh;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100vw;
  }
`;
const AboutLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 50%;

  @media (max-width: 500px) {
    width: 80%;
    align-items: center;
  }
`;
const Contact = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 1.5rem;

  @media (max-width: 500px) {
    width: 80%;
    margin-left: 0;
  }
`;
const Links = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;

  @media (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const Logo = styled.img`
  height: 60%;

  @media (max-width: 1000px) {
    height: 50%;
  }
`;
const Paragraph = styled.p`
  height: 40%;
  font-size: 1.3rem;
  line-height: 1;
  margin: 0 0 1rem 0;
  color: white;
`;
const Heading = styled.h5`
  font-weight: bold;
  color: white;

  @media (max-width: 950px) {
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
const OpenEmail = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;
const ComposeEmail = styled.div`
  height: 10%;
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.3rem;
`;
const CopyRight = styled.div`
  margin-top: 3rem;
  font-size: 1.3rem;
  color: white;

  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
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
      <FooterLower>
        <AboutLinks>
          <Logo src={Image} />
          <Paragraph>
            We are a tech company with a mission to help companies extend their
            business with the help of technology. Founded in 2021, we have
            satisfied all our clients.
          </Paragraph>
          <Links>
            <FaFacebook
              className="socials"
              style={{ marginRight: "1rem", color: "#4267B2" }}
            />
            <FaInstagramSquare
              className="socials"
              style={{ marginRight: "1rem", color: "#3f729b" }}
            />
            <FaLinkedin
              className="socials"
              style={{ marginRight: "1rem", color: "#0077b5" }}
            />
            <FaTwitter
              className="socials"
              style={{ marginRight: "1rem", color: " #00acee" }}
            />
            <FaGithub
              className="socials"
              style={{ marginRight: "1rem", color: "#171515" }}
            />
          </Links>
        </AboutLinks>
        <Contact>
          <Heading>Company</Heading>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Janus+Softwares/@19.1928522,72.9705314,15z/data=!4m5!3m4!1s0x0:0x8a1b0b9208eec948!8m2!3d19.1928522!4d72.9705314?shorturl=1"
            rel="noreferrer"
          >
            <Paragraph>
              Address - Registered Office – Janus Softwares – 104/105, A Wing, Manas
              Residency, Veer Savarkar Marg, Teen Petrol Pump, Thane(W),
              Maharashtra, India – 400602
            </Paragraph>
          </a>
          <OpenEmail>
            <ComposeEmail>
              <BsChevronCompactRight />
              Contact <br />
              <div>Anurag Baheti CEO </div>
              <br />
              <Span>
                <a href="https://wa.me/9029050299" target="_blank" rel="noreferrer" >
                  <FaWhatsapp className="contact"/>{" "}
                </a>
                <a href="mailto: anil@aummetals.com" target="_blank" rel="noreferrer">
                  <AiOutlineMail className="contact"/>{" "}
                </a>
                <a href="tel:+919029050299" target="_blank" rel="noreferrer">
                  {" "}
                  <FiPhoneCall className="contact"/>{" "}
                </a>
              </Span>
            </ComposeEmail>
          </OpenEmail>
        </Contact>
      </FooterLower>
      <CopyRight>Copyright © 2022 Constbase. All Rights Reserved</CopyRight>
    </MainDiv>
  );
};

export default Footer;
