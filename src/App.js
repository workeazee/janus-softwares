import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import TechPage from "./pages/TechPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import "./styles/Header.css";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", position: "relative" }}>
      <Header />
      <MainPage />
      {/* <ServicesPage />
      <TechPage />
      <AboutPage />
      <Footer />
      <ScrollButton /> */}
    </div>
  );
}

export default App;
