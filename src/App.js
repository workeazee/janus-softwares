import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import TechPage from "./pages/TechPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import './styles/Header.css'
function App() {
  return (
    <div className="App" style={{"overflowX": "hidden"}}>
      <Header />
      <MainPage />
      <ServicesPage />
      <TechPage />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default App;
