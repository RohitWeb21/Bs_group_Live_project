import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Views/LandingPage";
// import Service from "./Views/Service";
import AboutUs from "./Views/AboutUs";
import WorkingProg from "./Views/WorkingProg";
import ChooseUs from "./Views/ChooseUs";
import RecentWorks from "./Views/RecentWorks";
import ContactUs from "./Views/ContactUS";
import Footer from "./Components/Footer";
import Career from "./Views/Career";
import Services from "./Views/Services";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      {/* <Service /> */}
      <Services/>
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
