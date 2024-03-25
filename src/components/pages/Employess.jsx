import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import sourabhDp from "../../images/sourabh.jpeg";
import srejeelDp from "../../images/sreejal_ranjan.jpeg";
import subhamDp from "../../images/shubham_yadav.jpeg";
import parthDp from "../../images/parth_jain.jpeg";
import siddheshDp from "../../images/siddhesh_shinde.jpeg";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const Item = ({ img, name, desc }) => {
  return (
    <Box
      width={{ xs: 350, md: 580 }}
      height={{ xs: 500, md: 360 }}
      bgcolor={"#262626"}
      borderRadius={"1rem"}
      margin={{ xs: "auto", md: 5 }}
      overflow={"hidden"}
    >
      <Box
        height={{ xs: "25%", md: "35%" }}
        bgcolor={"#ffffff"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        px={3}
        gap={3}
        borderRadius={"1rem"}
      >
        <Avatar src={img} sx={{ width: 80, height: 80 }} />
        <Typography
          color={"#000229"}
          className="plus-jakarta-sans"
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          lineHeight={"1.25rem"}
        >
          {name}
        </Typography>
      </Box>
      <Box
        height={{ xs: "75%", md: "65%" }}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={3.5}
      >
        <Typography
          color={"#ffffff"}
          className="plus-jakarta-sans"
          fontSize={"1.125rem"}
          lineHeight={"1.81rem"}
          textAlign={"start"}
        >
          “{desc}”
        </Typography>
      </Box>
    </Box>
  );
};

const employees = [
  {
    name: "Serjeel Ranjan",
    img: srejeelDp,
    desc: "I'm grateful to have worked with Janus Softwares, a company that trusted my skills and gave me the chance to collaborate with overseas clients. Their confidence has not only boosted my professional growth but also broadened my global perspective. I'm honored to be part of such a forward-thinking team.",
  },
  {
    name: "Shubham Yadav",
    img: subhamDp,
    desc: "During my internship at Janus Software, I acquired practical skills in Python development and data analysis. I collaborated with a supportive team, whose guidance and mentorship greatly enhanced my learning experience. Their insights and assistance were instrumental in my professional growth.",
  },
  {
    name: "Paarth Jain",
    img: parthDp,
    desc: "It was great working with Janus Softwares. My onboarding experience was really smooth and people here are really helpful. Initially I faced some issues working with the codebase but senior devs guided me right.",
  },

  {
    name: "Siddhesh Shinde",
    img: siddheshDp,
    desc: "My time at Janus Softwares yielded a wealth of learnings, fostered by a flexible work environment. Within the realm of Janus Softwares, I found myself honing my focus on delivering quality output for the company, unbound by conventional work hour constraints. Every day at Janus Softwares felt like blossoming, a chance to flourish and contribute.",
  },
  {
    name: "Sourabh",
    img: sourabhDp,
    desc: "It has been a privilege working with Jenus Software.  Jenus consistently operates at the forefront of technology, fostering an environment that values and cultivates individual capabilities. Their unwavering trust in my abilities has propelled my growth, while interactions with peers from diverse backgrounds have enriched my understanding of core technologies and organizational practices.",
  },
];

const Employess = (props) => {
  return (
    <Box
      ref={props.employeeRef}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ xs: 1.5, md: 3 }}
      my={{ xs: 5, md: 10 }}
    >
      <Typography
        className="poppins-medium"
        fontSize={{ xs: "1.75rem", md: "3rem" }}
        lineHeight={"108%"}
        color={"#30DCCA"}
      >
        Employee Testimonials
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.5rem" }}
          lineHeight={"150%"}
          color={"#fff"}
          textAlign={"center"}
          flex={1}
        >
          Discover What Our Team Has to Say About Their Experience Working With
          Us 💼💬
        </Typography>

        <Box
          display={{ xs: "none", md: "flex" }}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          pr={2}
        >
          <Box
            className="custom-prev-button"
            width={55}
            height={55}
            bgcolor={"#30DCCA"}
            borderRadius={"50%"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ArrowBackRoundedIcon sx={{ color: "#ffffff" }} />
          </Box>
          <Box
            className="custom-next-button"
            width={55}
            height={55}
            bgcolor={"#30DCCA"}
            borderRadius={"50%"}
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <ArrowForwardRoundedIcon sx={{ color: "#ffffff" }} />
          </Box>
        </Box>
      </Box>

      <Box width={"100vw"} display={{ xs: "none", md: "block" }}>
        <swiper-container
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          slides-per-view="3"
          space-between="100" 
          scrollbar-clickable="true" 
          mousewheel-invert="true"
          pagination-clickable="true"
          pagination-dynamic-bullets="true"
          autoplay-delay="2000"
          autoplay-disable-on-interaction="true"
          center-slides="true"
          pagination="true"
          style={{
            "--swiper-pagination-color": "#30DCCA",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": 0.2,
            "--swiper-pagination-bullet-size": "15px",
          }}
        >
          {employees.map((employee, index) => (
            <swiper-slide key={index}>
              <Item
                name={employee.name}
                img={employee.img}
                desc={employee.desc}
              />
            </swiper-slide>
          ))}
          <swiper-slide>
            <Box
              width={{ xs: 350, md: 580 }}
              height={{ xs: 290, md: 360 }}
              bgcolor={"transparent"}
            />
          </swiper-slide>
        </swiper-container>
      </Box>
      <Box width={"100vw"} display={{ xs: "block", md: "none" }}>
        <swiper-container
          slides-per-view="1"
          autoplay-delay="2000"
          autoplay-disable-on-interaction="true"
          center-slides="true"
          pagination="false"
          style={{
            "--swiper-pagination-color": "#30DCCA",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": 0.2,
            "--swiper-pagination-bullet-size": "15px",
          }}
        >
          {employees.map((employee, index) => (
            <swiper-slide key={index}>
              <Item
                name={employee.name}
                img={employee.img}
                desc={employee.desc}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
    </Box>
  );
};

export default Employess;
