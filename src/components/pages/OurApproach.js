import { Box, Typography } from "@mui/material";
import React from "react";
import HomeImg from "../../images/About.svg";
import styled from "styled-components";
import bgMd from '../../images/gradients/green_gradient_md.svg'

const Img = styled.img`
  height: 550px;
  width: 650px;

  @media (max-width: 700px) {
    height: 300px;
    width: 350px;
  }
`;

const OurApproach = (props) => {
  return (
    <Box
      ref={props.ourApproachRef}
      width={"100%"}
      bgcolor={{ xs: "inherit", md: "#262626" }}
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      my={{ xs: 5, md: 10 }}
      py={5}
      zIndex={999}
      position={'relative'}
    >
      <Box
        width={{ xs: "100%", lg: "50%" }}
        px={{ xs: 0, md: "4rem" }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        justifyContent={"center"}
      >
        <Typography
          className="poppins-medium"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          lineHeight={{ xs: "2rem", md: "2.6rem" }}
          color={"#30DCCA"}
          textAlign={{ xs: "center", lg: "start" }}
        >
          Our Approach
        </Typography>

        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.2rem" }}
          lineHeight={{ xs: "1rem", md: "1.4rem" }}
          color={"#fff"}
          width={{ xs: "100%", md: "90%" }}
          textAlign={{ xs: "center", lg: "start" }}
        >
          Streamline reporting, customer experiences, drive efficiency with
          web-app driven Processes.
        </Typography>

        <Typography
          className="plus-jakarta-sans"
          fontSize={"1rem"}
          lineHeight={"1.5rem"}
          color={"#fff"}
          width={{ xs: "100%", md: "90%" }}
          textAlign={{ xs: "center", lg: "start" }}
        >
          With future-proof technology, agile practices, market acumen and our
          highly experienced team, we create web applications that are engaging
          and highly functional. Be it custom website, process implementation,
          connecting with social networking sites, or system integration, we’ve
          got you covered.
        </Typography>
      </Box>
      <Box
        width={{ xs: "100%", lg: "50%" }}
        textAlign={"center"}
        mt={{ xs: 5, md: 0 }}
      >
        <Img src={HomeImg} />
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
      <Box
        display={{ xs: "flex", md: "none" }}
        position={"absolute"}
        bottom={"-300px"}
        right={"-50px"}
        zIndex={99}
      >
        <img src={bgMd} />
      </Box>
    </Box>
  );
};

export default OurApproach;
