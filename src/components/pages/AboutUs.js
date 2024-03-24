import React from "react";
import styled from "styled-components";
import About from "../../images/About.svg";
import DownloadsImg from "../../images/downloads.svg";
import DeliveredImg from "../../images/projects_delivered.svg";
import { Box, Typography } from "@mui/material";
import CircularProgressWithLabel from "../globals/CircularProgressWithLabel";

const MainDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 750px) {
    flex-direction: column;
    margin-top: 0rem;
    gap: 3rem;
  }
`;
const LeftCol = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 750px) {
    width: 100%;
  }
`;
const RightCol = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;


  @media (max-width: 750px) {
    width: 100%;
    flex-direction: column;
  }
`;

const AboutUs = (props) => {
  return (
    <MainDiv ref={props.aboutRef}>
      <HeaderDiv>
        <Typography
          className="poppins-medum"
          fontSize={{ xs: '1.5rem', md: "3rem"}}
          color="#30DCCA"
          lineHeight={{xs: '2rem', md: "4rem"}}
          textAlign={"center"}
        >
          Who Are We
        </Typography>
        <Typography
          className="plus-jakarta-sans"
          fontSize={{ xs: '.9rem' , md: "1.3rem"}}
          color="#ffffff"
          lineHeight={"150%"}
          textAlign={"center"}
          width={{xs: '70%', md: '100%'}}
          margin={'auto'}
        >
          Providing you with the cutting{" "}
          <Typography component={"span"} color="#30DCCA">
            edge solutions
          </Typography>{" "}
          that the tech world has.
        </Typography>
      </HeaderDiv>
      <Container>
        <LeftCol>
          <Box
            width={{ xs: "100%", lg: "60%" }}
            display="flex"
            flexDirection="column"
            gap={2}
          >
            <Typography
              className="poppins-regular"
              fontSize={"1rem"}
              color="#30DCCA"
              lineHeight={"1.1rem"}
              display={{xs:'none', lg: 'block'}}
            >
              About Us
            </Typography>
            <Typography
              className="poppins-semibold"
              fontSize={"1.75rem"}
              color={"#ffffff"}
              lineHeight={"2.3rem"}
              display={{xs:'none', lg: 'block'}}
            >
              We design brand, digital experience that engage the right
              customers and As well as right business
            </Typography>
            <Box
              mt={5}
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={5}
              justifyContent={{xs:'center', md:'flex-start'}}
            >
              <Box display="flex" flexDirection={"column"} gap={2} alignItems={'center'}>
                <CircularProgressWithLabel
                  value={90}
                  sx={{ color: "#30DCCA" }}
                  size={"7rem"}
                />
                <Typography
                  variant="caption"
                  component="div"
                  color="#ffffff"
                  className="poppins-regular"
                  fontSize={"1rem"}
                  lineHeight={"1.2rem"}
                >
                  Development
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={"column"}
                gap={2}
                alignItems={"center"}
              >
                <CircularProgressWithLabel
                  value={75}
                  sx={{ color: "#30DCCA" }}
                  size={"7rem"}
                />
                <Typography
                  variant="caption"
                  component="div"
                  color="#ffffff"
                  className="poppins-regular"
                  fontSize={"1rem"}
                  lineHeight={"1.2rem"}
                >
                  Marketing
                </Typography>
              </Box>
            </Box>
          </Box>
        </LeftCol>
        <RightCol>
          <Box textAlign="center" width={{xs: '100%', lg: "19rem"}}>
            <img src={DownloadsImg} width={'100%'} />
            <Typography
              color="#A3A3A3"
              className="poppins-regular"
              fontSize={"1rem"}
              lineHeight={"2rem"}
              textAlign="center"
              mt={2}
            >
              Starting with a 360º app strategy defining and detailing the
              raison of the app: technology required, investment
              estimate, timeline, total cost of ownership and the end value, we
              also dive deep into content strategy, branding strategy and
              monetization. Result – engaging apps that users actually use.
            </Typography>
          </Box>
          <Box textAlign="center"  width={{xs: '100%', lg: "19rem"}}>
            <img src={DeliveredImg} width={'100%'} />
            <Typography
              color="#A3A3A3"
              className="poppins-regular"
              fontSize={"1rem"}
              lineHeight={"2rem"}
              textAlign="center"
              mt={2}
            >
              Tech solutions that have helped businesses align their
              channels/customer interfaces, streamline processes, automate
              systems to bring in efficiency and effectiveness, simplify
              communications, elevate customer experiences, embed resources and
              do so much more.
            </Typography>
          </Box>
        </RightCol>
      </Container>
    </MainDiv>
  );
};

export default AboutUs;
