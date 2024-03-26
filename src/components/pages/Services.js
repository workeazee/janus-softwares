import { Box, Typography } from "@mui/material";
import React from "react";
import DeliveredImg from "../../images/Home.svg";
import TickImg from "../../images/icons/tick-symbol.svg";
import DotsImg from "../../images/icons/SaaS-Ornament-Dot.webp.svg";

const pros = [
  { point: "Navigate seamlessly through our software with an intuitive interface." },
  { point: "Stay informed and in control with real-time updates on project progress." },
  { point: "Our user-friendly interface makes it easy to stay organized." },
  { point: "Track progress with real-time updates." },
  { point: "Prioritize tasks and delegate them to team members with ease." },
];

const Img = (props) => {
  return (
    <Box position={"relative"} textAlign={"center"}>
      <img
        src={DeliveredImg}
        style={{ position: "relative", zIndex: 999 }}
        {...props}
      />
    </Box>
  );
};

const Services = (props) => {
  return (
    <Box
      ref={props.servicesRef}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={{ xs: 10, lg: 0 }}
    >
      <Box display={{ xs: "none", md: "block" }} width={"50%"}>
        <Img width={611} height={492} />
      </Box>
      <Box
        width={{ xs: "100%", md: "50%" }}
        display={"flex"}
        flexDirection={"column"}
        gap={{ xs: 3, lg: 2 }}
      >
        <Typography
          className="poppins-medium"
          fontSize={"3rem"}
          lineHeight={"4.75rem"}
          color={"#30DCCA"}
          textAlign={{ xs: "center", lg: "start" }}
        >
          Why Choose Us
        </Typography>
        <Typography
          className="plus-jakarta-sans"
          fontSize={"1rem"}
          lineHeight={"1.5rem"}
          color={"#fff"}
          width={{ xs: "100%", md: "65%" }}
          textAlign={{ xs: "center", lg: "start" }}
        >
          Stay focused and motivated with visually appealing user interface and
          the reminders feature that helps you focus on what’s important here
          and now, without missing a beat.
        </Typography>
        <Box display={{ xs: "block", md: "none" }} width={"100%"}>
          <Img width={"100%"} />
        </Box>
        <Box>
          {pros.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" gap={2} my={1.5}>
              <img src={TickImg} />
              <Typography
                className="plus-jakarta-sans"
                fontSize={"1rem"}
                lineHeight={"1.5rem"}
                color={"#fff"}
              >
                {item.point}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
