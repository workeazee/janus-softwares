import { useRef } from 'react';
import './App.css';
import Header from './components/globals/Header';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Technology from './components/pages/Technology';
import Clients from './components/pages/Clients';
import WhyUs from './components/pages/WhyUs';
import OurApproach from './components/pages/OurApproach';
import Solutions from './components/pages/Solutions';
import TeamMembers from './components/pages/Team';
import Contact from './components/pages/Contact';
import Employess from './components/pages/Employess';
import { register } from "swiper/element/bundle";

register();

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
