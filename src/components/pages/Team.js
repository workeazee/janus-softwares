import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Anurag from "../../images/Anurag.jpg";
import Anmol from "../../images/Anmol.jpg";
import bg from "../../images/gradients/green_gradient_cr.svg";
import bgMd from '../../images/gradients/green_gradient_md.svg'

const Highlighted = styled.span`
  color: #3acbbc;
`;

const Img = styled.img`
  width: 351px;
  height: 379px;
  object-fit: contain;

  @media (max-width: 750px) {
    width: 250px;
    height: 250px;
  }
`;

const members = [
  {
    img: Anurag,
    name: "Anurag Baheti",
    role: "CEO & Co-Founder",
  },
  {
    img: Anmol,
    name: "Anmol Bhutada",
    role: "CTO & Co-Founder",
  },
];

const TeamMembers = (props) => {
  return (
    <Box position={'relative'}>
      <Box
        ref={props.teamMembersRef}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ xs: 1.5, md: 3 }}
        my={{ xs: 5, md: 10 }}
        zIndex={999}
        minHeight={'80vh'}
      >
        <Typography
          className="poppins-medium"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          lineHeight={{ xs: "2rem", md: "2.6rem" }}
          color={"#30DCCA"}
        >
          Team Members
        </Typography>
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.2rem" }}
          lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
          color={"#fff"}
          textAlign={"center"}
        >
          Unveiling the <Highlighted>Heart</Highlighted> and{" "}
          <Highlighted>Soul</Highlighted> of Our Company:
          <br /> Our <Highlighted>Exceptional</Highlighted> Team Members 🚀
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
          width={"100%"}
          zIndex={999}
          overflowX={"scroll"}
        >
          {members.map((member, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={{ xs: 0.5, md: 1 }}
            >
              <Img src={member.img} />
              <Typography
                textAlign={"center"}
                className="poppins-regular"
                fontSize={{ xs: "1rem", md: "1.2rem" }}
                lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
                color={"#fff"}
              >
                {member.name}
              </Typography>
              <Typography
                textAlign={"center"}
                className="poppins-regular"
                fontSize={{ xs: "1rem", md: "1.2rem" }}
                lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
                color={"#30DCCA"}
              >
                {member.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        display={{ xs: "none", md: "flex" }}
        position={"absolute"}
        top={"-350px"}
        left={"-940px"}
        zIndex={99}
      >
        <img src={bg} />
      </Box>
      <Box
        display={{ xs: "flex", md: "none" }}
        position={"absolute"}
        top={"-250px"}
        right={"-50px"}
        zIndex={99}
      >
        <img src={bgMd} />
      </Box>
      <Box
        display={{ xs: "flex", md: "none" }}
        position={"absolute"}
        bottom={"-250px"}
        left={"-50px"}
        zIndex={99}
      >
        <img src={bgMd} />
      </Box>
    </Box>
  );
};

export default TeamMembers;
