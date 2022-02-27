import "./Styles/LandingPage.scss";
import HomeVector from "../images/HomeVector1.png";
import AboutUs from "./AboutUs";
import Services from "./Services";
import WorkingProg from "./WorkingProg";
import ChooseUs from "./ChooseUs";
import RecentWorks from "./RecentWorks";
import ContactUs from "./ContactUS";
import Career from "./Career";
import Footer from "../Components/Footer";
const LandingPage = () => {
  return (
    <>
      <section className="MainLandingSection " id="LandingPage">
        <section className="d-flex flex-wrap">
          <article className="col-lg-6 col-md-12 MainArticle">
            <h2>
              Get your
              <br />
              big social media
              <br />
              break-through today!
            </h2>
            <small className="text-white">
              Book Your 30-minute meeting for free strategy
            </small>
            <a href="#" className="BookNow">
              Book now
            </a>
          </article>
          <figure className="col-lg-6 col-md-12">
            <img src={HomeVector} alt="Bs Group Vector Image" />
          </figure>
        </section>
      
      </section>
      <AboutUs />
        <Services />
        <WorkingProg />
        <ChooseUs />
        <RecentWorks />
        <ContactUs />
      
        <Footer/>
    </>
  );
};
export default LandingPage;
