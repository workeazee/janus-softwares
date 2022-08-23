import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import Image from "../../images/Janus_Logo.png";

const MainDiv = styled.div`
  height: 55vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #2b2b2b;

  @media (max-width: 1200px) {
    height: 40vh;
  }
`;
const Helper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Left = styled.div`
  height: 80%;
  width: 40%;
  font-size: 1.3rem;
  color: #fff;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;
const Right = styled.div`
  height: 80%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1200px) {
    width: 50%;
    justisfy-content: center;
  }
`;
const Rights = styled.div`
  color: #fff;
  font-size: 1.2rem;

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;
const Span = styled.span`
  color: turquoise;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 1rem;

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
const Heading = styled.h1`
  color: #fff;
  margin-bottom: 0.2rem;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
const P = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  font-family: "Lora", sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
  @media (max-width: 650px) {
    font-size: 0.8rem;
  }
`;
export const Color = styled.span`
  color: turquoise;
`;
const ImageDiv = styled.div`
  height: 70%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 1200px) {
    height: 80%;
    width: 50%;
  }
  @media (max-width: 650px) {
    height: 50%;
    width: 65%;
  }
`;
const ImageStyle = styled.img`
  height: 90%;
  width: 100%;
  
  @media (max-width: 900px) {
    height: 90%;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Footer = props => {
  const aStyle = {
    textDecoration: "none",
  };
  return (
    <MainDiv ref={props.aboutUsRef} >
      <Helper>
        <Left>
          <ImageDiv>
            <ImageStyle src={Image} alt="img" />
          </ImageDiv>
          Janus <Color>&nbsp;Softwares&nbsp;</Color> is a tech company with a
          mission to help companies extend their business with the help of
          technology. Founded in 2021, we have satisfied all our clients.
        </Left>
        <Right>
          <Heading>About Us</Heading>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Janus+Softwares/@19.1928522,72.9705314,15z/data=!4m5!3m4!1s0x0:0x8a1b0b9208eec948!8m2!3d19.1928522!4d72.9705314?shorturl=1"
            rel="noreferrer"
            style={aStyle}
          >
            <P>
              <Color>Address <BiMap /> - Registered Office – Janus Softwares – 104/105,
              A Wing, Manas Residency, Veer Savarkar Marg, Teen Petrol Pump,
              Thane(W), Maharashtra, India – 400602</Color>
            </P>
          </a>
          <Heading>Contact</Heading>
          <P>
            Anurag Baheti - <Color>CEO</Color>
          </P>
          <Span>
            <a href="https://wa.me/+919029050299" target="_blank" rel="noreferrer">
              <FaWhatsapp className="contact" size={26} color="turquoise" />{" "}
            </a>
            <a
              href="mailto: janus.softwares@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="contact" size={26} color="turquoise" />{" "}
            </a>
            <a href="tel:+919029050299" target="_blank" rel="noreferrer">
              {" "}
              <FiPhoneCall className="contact" size={26} color="turquoise" />{" "}
            </a>
          </Span>
        </Right>
      </Helper>
      <Rights>Copyright © 2022 Janus Softwares. All Rights Reserved</Rights>
    </MainDiv>
  );
};

export default Footer;
