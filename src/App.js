import { useRef } from 'react';
import './App.css';
import Header from './components/globals/Header';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Technology from './components/pages/Technology';

function App() {
  const homeRef = useRef();
  const techRef  = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const aboutUsRef = useRef();

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        techRef={techRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        aboutUsRef={aboutUsRef}
      />
      <Home 
        homeRef={homeRef}
      />
      <Technology 
        techRef={techRef}
      />
      <AboutUs 
        aboutRef={aboutRef}
      />
      <Services 
        servicesRef={servicesRef}
      />
      <Footer 
        aboutUsRef={aboutUsRef}
      />
    </div>
  );
}

export default App;
