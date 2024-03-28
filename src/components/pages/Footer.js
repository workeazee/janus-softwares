import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { BiMap } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @media (max-width: 700px) {
    background-color: #262626;
  }
`;
export const Color = styled.span`
  color: turquoise;
`;

const Footer = (props) => {
  return (
    <MainDiv ref={props.footerRef}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={{ xs: "center", md: "space-evenly" }}
        padding={"10px"}
      >
        <Box
          width={{ xs: "100%", md: "40%" }}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <Typography
            fontSize={{ xs: "2rem", md: "2.6rem" }}
            lineHeight={{ xs: "2rem", md: "2.6rem" }}
            sx={{
              fontFamily: "Algerian",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Janus <Color>Softwares</Color>
          </Typography>
          <Typography
            className="plus-jakarta-sans"
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
            color={"#fff"}
            // textAlign={{xs:'center', md: 'start'}}
          >
            Janus Softwares is a tech company with a mission to help companies
            extend their business with the help of technology. Founded in 2021,
            we have satisfied all our clients.
          </Typography>

          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            // justifyContent={{xs:'center', md:'start'}}
            gap={3}
          >
            <a
              href="https://wa.me/+919029050299"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="contact" size={26} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/company/janussoftwares/about/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="contact" size={26} color="white" />
            </a>
            <a
              href="mailto: janus.softwares@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail className="contact" size={26} color="white" />
            </a>
          </Box>
        </Box>
        <Box
          width={{ xs: "100%", md: "40%" }}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          mt={{ xs: 1, md: 0 }}
        >
          <Typography
            className="plus-jakarta-sans"
            fontSize={{ xs: "2rem", md: "2.6rem" }}
            lineHeight={{ xs: "2rem", md: "2.6rem" }}
            color={"#fff"}
            //  textAlign={{xs:'center', md: 'start'}}
          >
            Contact
          </Typography>
          <Typography
            className="plus-jakarta-sans"
            fontSize={{ xs: "1rem", md: "1.2rem" }}
            lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
            color={"#fff"}
            // textAlign={{xs:'center', md: 'start'}}
          >
            <Color>
              <BiMap /> Address - Registered Office - Janus Softwares - 104/105,
              A Wing, Manas Residency, Veer Savarkar Marg, Teen Petrol Pump,
              Thane(W), Maharashtra, India - 400602
            </Color>
          </Typography>

          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            // justifyContent={{xs:'center', md:'start'}}
            gap={3}
          >
            <a href="tel:+919029050299" target="_blank" rel="noreferrer" style={{display:'flex', alignItems:'center', gap: '15px', textDecoration:'none', }}>
              <FiPhoneCall className="contact" size={26} color="white" />
              <Typography
                className="plus-jakarta-sans"
                fontSize={{ xs: "1rem", md: "1.2rem" }}
                lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
                color={"#fff"}
              >
                +91 9029050299
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        width={"100%"}
        bgcolor={"#30DCCA"}
        mt={{ xs: 5, md: 10 }}
      >
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.2rem" }}
          lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
          color={"#fff"}
          padding={"0.4rem 0"}
        >
          Copyright © 2024 Janus Softwares. All Rights Reserved
        </Typography>
      </Box>
    </MainDiv>
  );
};

export default Footer;
