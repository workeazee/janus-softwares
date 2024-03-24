import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Anurag from "../../images/Anurag.jpg";

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
    role: "CEO",
  },
  {
    img:Anurag,
    name: "Anmol Baheti",
    role: "CEO",
  },
];

const TeamMembers = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ xs: 2, md: 4 }}
      my={{ xs: 5, md: 10 }}
    >
      <Typography
        className="poppins-medium"
        fontSize={{ xs: "1.75rem", md: "3rem" }}
        lineHeight={"108%"}
        color={"#30DCCA"}
      >
        Team Members
      </Typography>
      <Typography
        className="plus-jakarta-sans"
        fontSize={{ xs: "1rem", md: "1.5rem" }}
        lineHeight={"150%"}
        color={"#fff"}
        textAlign={"center"}
      >
        Unveiling the <Highlighted>Heart</Highlighted> and{" "}
        <Highlighted>Soul</Highlighted> of Our Company: Our{" "}
        <Highlighted>Exceptional</Highlighted> Team Members 🚀
      </Typography>
      <Box
        display={{xs:'none', md:"flex"}}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={'center'}
        gap={5}
        width={"100%"}
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
              fontSize={"1.25rem"}
              color={"#fff"}
            >
              {member.name}
            </Typography>
            <Typography
              textAlign={"center"}
              className="poppins-regular"
              fontSize={"1rem"}
              color={"#fff"}
            >
              {member.role.toLocaleUpperCase()}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamMembers;
