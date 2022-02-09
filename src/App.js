import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Views/LandingPage";
import AboutUs from "./Views/AboutUs";
import WorkingProg from "./Views/WorkingProg";
import ChooseUs from "./Views/ChooseUs";
import RecentWorks from "./Views/RecentWorks";
import ContactUs from "./Views/ContactUS";
import Footer from "./Components/Footer";
import Career from "./Views/Career";
import Services from "./Views/Services";
// Aos Animation
import AOS, { init } from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
      <Navbar />
      <LandingPage />
      <Services />
      <AboutUs />
      <WorkingProg />
      <ChooseUs />
      <RecentWorks />
      <ContactUs />
      <Career />
      <Footer />
    </>
  );
}

export default App;
