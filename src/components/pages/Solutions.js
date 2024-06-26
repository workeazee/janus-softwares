import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import img from "../../images/solutions.png";
import bg from "../../images/gradients/green_gradient_cr.svg";
import bgMd from '../../images/gradients/green_gradient_md.svg'

export const Highlighted = styled.span`
  color: #3acbbc;
`;

const Img = styled.img`
  width: 900px;
  height: 500px;

  @media (max-width: 768px) {
    width: 350px;
    height: 225px;
  }
`;

const Solutions = (props) => {
  return (
    <Box position={"relative"}>
      <Box
        ref={props.solutionsRef}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={{ xs: 1.25, md: 3 }}
        zIndex={999}
        position={"relative"}
      >
        <Typography
          className="poppins-medium"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          lineHeight={{ xs: "2rem", md: "2.6rem" }}
          color={"#30DCCA"}
          textAlign={'center'}
        >
          Solutions That We Provide
        </Typography>
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.2rem" }}
          lineHeight={{ xs: "1.2rem", md: "1.4rem" }}
          color={"#fff"}
          width={{ xs: "100%", md: "50%" }}
          textAlign={"center"}
        >
          Providing you with the cutting{" "}
          <Highlighted>edge solutions</Highlighted> that the tech world has to
          offer. Here are some of the <Highlighted>latest tech</Highlighted>{" "}
          that we thrive on.
        </Typography>

        <Img src={img} style={{ zIndex: 999 }} />
      </Box>
      <Box
        display={{ xs: "none", md: "flex" }}
        position={"absolute"}
        top={"-850px"}
        left={"-840px"}
        zIndex={99}
      >
        <img src={bg} />
      </Box>
      <Box
        display={{ xs: "flex", md: "none" }}
        position={"absolute"}
        top={"-300px"}
        left={"-50px"}
        zIndex={99}
      >
        <img src={bgMd} />
      </Box>
    </Box>
  );
};

export default Solutions;
