import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Views/LandingPage";
import AboutUs from "./Views/AboutUs";
import RecentWorks from "./Views/RecentWorks";
import ContactUs from "./Views/ContactUS";
import Career from "./Views/Career";
import Services from "./Views/Services";

// Aos Animation
import AOS, { init } from "aos";
import "aos/dist/aos.css";
// import RoutePage from "./Views/RoutePage";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/Bs_group_Live_project" component={LandingPage}></Route>
        <Route exact path="/Bs_group_Live_project/service" component={Services}></Route>
        <Route exact path="/Bs_group_Live_project/about" component={AboutUs}></Route>
        <Route exact path="/Bs_group_Live_project/portfoilo" component={RecentWorks}></Route>
        <Route exact path="/Bs_group_Live_project/career" component={Career}></Route>
        <Route exact path="/Bs_group_Live_project/contact" component={ContactUs}></Route>
        
      </Switch>

  
    </>
  );
}

export default App;
// https://restcountries.com/v3.1/all
