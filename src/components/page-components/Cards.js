import React from "react";
import styled from "styled-components";
import Data from "./DATA";
import MediaCard from "./MediaCard";

const MainDiv = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
`;
const Cards = () => {
  return (
    <MainDiv>
      {Data.map((item, index) => {
        return (
          <MediaCard
            key={index}
            icon={item.icon}
            name={item.name}
            description={item.description}
            url={item.url}
          />
        );
      })}
    </MainDiv>
  );
};

export default Cards;
