import React from "react";
import "./css/stacks.css";
import react from "../../images/stacks/react.png";
import angular from "../../images/stacks/angular1.png";
import css from "../../images/stacks/css.jpg";
import express from "../../images/stacks/express.png";
import git from "../../images/stacks/git.png";
import github from "../../images/stacks/github.png";
import html from "../../images/stacks/html.png";
import java from "../../images/stacks/java.png";
import javascript from "../../images/stacks/javascript.png";
import material from "../../images/stacks/material.svg";
import mongo from "../../images/stacks/mongo.jpg";
import next from "../../images/stacks/nextjs.png";
import node from "../../images/stacks/node.png";
import scss from "../../images/stacks/scss.png";
import spring from "../../images/stacks/spring.png";
import redux from "../../images/stacks/redux.png";
import firebase from "../../images/stacks/firebase.png";
import { Box, Typography } from "@mui/material";
import bg from "../../images/gradients/green_gradient_cr.svg";
import bgMd from "../../images/gradients/green_gradient_md.svg";
import { Highlighted } from "./Solutions";

const skills = [
  {
    name: "Java",
    img: java,
  },
  {
    name: "Javascript",
    img: javascript,
  },
  {
    name: "React.js",
    img: react,
  },
  {
    name: "Node.js",
    img: node,
  },
  {
    name: "Express.js",
    img: express,
  },
  {
    name: "MongoDB",
    img: mongo,
  },
  {
    name: "Next.js",
    img: next,
  },
  {
    name: "Angular",
    img: angular,
  },
  {
    name: "Firebase",
    img: firebase,
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "HTML",
    img: html,
  },

  {
    name: "Git",
    img: git,
  },
  {
    name: "GitHub",
    img: github,
  },
    {
      name: "MaterialUI",
      img: material,
    },
    {
      name: "SCSS",
      img: scss,
    },
  //   {
  //     name: "Spring Boot",
  //     img: spring,
  //   },
];

const TechStacks = (props) => {
    const chunkSize = 6; 

  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const skillChunks = chunkArray(skills, chunkSize);

  return (
    <Box position={"relative"}>
      <Box
        ref={props.techStackRef}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"end"}
        gap={{ xs: 1.25, md: 3 }}
        zIndex={999}
        position={"relative"}
        minHeight={"100vh"}
        mt={5}
      >
        <Typography
          className="poppins-medium"
          fontSize={{ xs: "1.75rem", md: "3rem" }}
          lineHeight={"108%"}
          color={"#30DCCA"}
        >
          Our Technology Stack
        </Typography>
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: "1rem", md: "1.5rem" }}
          lineHeight={"150%"}
          color={"#fff"}
          width={{ xs: "100%", md: "50%" }}
          textAlign={"center"}
        >
          Delivering <Highlighted>robust</Highlighted> and{" "}
          <Highlighted>scalable</Highlighted> solutions tailored to your needs
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {skillChunks.map((chunk, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              alignItems={"center"}
              justifyContent={"space-around"}
              mb={2} // Add margin between rows
            >
              {chunk.map((skill) => (
                <Box className="rows" key={skill.name} mb={2}>
                  <img src={skill.img} alt={skill.name} />
                  <Typography
                    className="plus-jakarta-sans"
                    fontSize={{ xs: "1rem", md: "1.5rem" }}
                    lineHeight={"150%"}
                    color={"#fff"}
                    width={{ xs: "100%", md: "50%" }}
                    textAlign={"center"}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display={{ xs: "none", md: "flex" }}
        position={"absolute"}
        top={"-650px"}
        right={"-840px"}
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

export default TechStacks;
