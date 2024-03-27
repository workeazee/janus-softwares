import React, { useRef } from 'react';
import './App.css';
// import AboutUs from './components/pages/AboutUs';
// import Footer from './components/pages/Footer';
// import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import OurApproach from './components/pages/OurApproach';
// import Solutions from './components/pages/Solutions';
// import TeamMembers from './components/pages/Team';
// import Contact from './components/pages/Contact';
// import Employess from './components/pages/Employess';
import { register } from "swiper/element/bundle";
import TechStacks from './components/pages/TechStack';

register();

const Header = React.lazy(() => import('./components/globals/Header'))
const Home = React.lazy(() => import('./components/pages/Home'));
const AboutUs = React.lazy(() => import('./components/pages/AboutUs'));
const Footer = React.lazy(() => import('./components/pages/Footer'));
const Services = React.lazy(() => import('./components/pages/Services'));
const OurApproach = React.lazy(() => import('./components/pages/OurApproach'));
const Solutions = React.lazy(() => import('./components/pages/Solutions'));
const TeamMembers = React.lazy(() => import('./components/pages/Team'));
const Contact = React.lazy(() => import('./components/pages/Contact'));
const Employess = React.lazy(() => import('./components/pages/Employess'));


function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const ourApproachRef = useRef();
  const solutionsRef = useRef();
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
      />
      <Home 
        homeRef={homeRef}
        aboutRef={aboutRef}
      />
      {/* <Clients /> */}
      <AboutUs 
        aboutRef={aboutRef}
      />
      <Services 
        servicesRef={servicesRef}
      />
      <OurApproach ourApproachRef={ourApproachRef} />
      <Solutions solutionsRef={solutionsRef} />
      <TechStacks />
      <TeamMembers teamMembersRef={teamMembersRef} />
      {/* <Technology 
        techRef={techRef}
      /> */}
      <Employess employeeRef={employeeRef} />
      <Contact contactRef={contactRef} />
      <Footer 
        footerRef={footerRef}
      />
    </div>
  );
}

export default App;
