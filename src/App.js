import React, { useRef } from "react";
import "./App.css";
import { register } from "swiper/element/bundle";
import TechStacks from "./components/pages/TechStack";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import { Box } from "@mui/material";
import useIsOnTop from "./hooks/useIsOnTop";

register();

const Header = React.lazy(() => import("./components/globals/Header"));
const Home = React.lazy(() => import("./components/pages/Home"));
const AboutUs = React.lazy(() => import("./components/pages/AboutUs"));
const Footer = React.lazy(() => import("./components/pages/Footer"));
const Services = React.lazy(() => import("./components/pages/Services"));
const OurApproach = React.lazy(() => import("./components/pages/OurApproach"));
const Solutions = React.lazy(() => import("./components/pages/Solutions"));
const TeamMembers = React.lazy(() => import("./components/pages/Team"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Employess = React.lazy(() => import("./components/pages/Employess"));

function App() {
  const isTop = useIsOnTop()

  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const ourApproachRef = useRef();
  const solutionsRef = useRef();
  const techStackRef = useRef();
  const teamMembersRef = useRef();
  const contactRef = useRef();
  const footerRef = useRef();
  const employeeRef = useRef();

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        ourApproachRef={ourApproachRef}
        solutionsRef={solutionsRef}
        teamMembersRef={teamMembersRef}
        contactRef={contactRef}
        footerRef={footerRef}
        employeeRef={employeeRef}
        techStackRef={techStackRef}
      />
      <Home homeRef={homeRef} aboutRef={aboutRef} />
      {/* <Clients /> */}
      <AboutUs aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <OurApproach ourApproachRef={ourApproachRef} />
      <Solutions solutionsRef={solutionsRef} />
      <TechStacks techStackRef={techStackRef} />
      <TeamMembers teamMembersRef={teamMembersRef} />
      {/* <Technology 
        techRef={techRef}
      /> */}
      <Employess employeeRef={employeeRef} />
      <Contact contactRef={contactRef} />
      <Footer footerRef={footerRef} />
      <Box
        position={"fixed"}
        right={25}
        bottom={25}
        width={50}
        height={50}
        borderRadius={"50%"}
        bgcolor={"#30DCCA"}
        display={{display: isTop ? "none" :"flex"}}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={99999}
        sx={{cursor:'pointer', opacity: 0.8}}
        onClick={() => {
          homeRef?.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <KeyboardDoubleArrowUpRoundedIcon sx={{color: '#0E0E0E', fontSize: '2rem'}} />
      </Box>
    </div>
  );
}

export default App;
