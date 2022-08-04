// import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import TechPage from "./pages/TechPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import "./styles/Header.css";

import { Nav } from './components/Header/nav';
import NavProvider from "./components/Header/context/NavContext";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", position: "relative" }}>
      <NavProvider>
        <Nav />
        <MainPage />
        <ServicesPage />
        <TechPage />
        <AboutPage />
        <Footer />
        <ScrollButton />
      </NavProvider>
    </div>
  );
}

export default App;
