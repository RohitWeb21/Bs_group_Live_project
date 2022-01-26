import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Views/LandingPage";
import Service from "./Views/Service";
import AboutUs from "./Views/AboutUs";
import WorkingProg from "./Views/WorkingProg";
import ChooseUs from "./Views/ChooseUs";
import RecentWorks from "./Views/RecentWorks";
function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Service />
      <AboutUs />
      <WorkingProg />
      <ChooseUs />
   <RecentWorks/>
    </>
  );
}

export default App;
