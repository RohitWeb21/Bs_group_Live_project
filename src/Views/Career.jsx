// import { Link } from "react-router-dom";
import CareerImg from "../images/CareerImg1.png";
import CareerForm from "./CareerForm";
import "./Styles/Career.scss";
import Footer from "../Components/Footer";
import CareerCard from "./CareerFormCard";
// import $ from "jquery";

const Career = () => {


  return (
    <><section id="MainCareerSection" className="panel">
      <section className="MainCareer container panel " id="Career">
        <div className="d-flex flex-wrap">
          <article className="col-lg-6 col-sm-12">
            <div>
              <h2>Build</h2>
              <h2>
                your <p>Dream</p>
              </h2>
              <h2>JOb Here</h2>
              {/* <h3><em>Lorem ipsum dolor sit amet.</em></h3> */}
              <p>
                Discover a plethora of opportunities and grow with us. Stick not
                to the mundane tasks. We provide career enhancement related
                learning modules for all our interns and employees. There is
                whole scope of promotions and switching of departments if you
                wish to learn new skills in various domains.
                <br />
                <br />
                We believe in adopting a wide horizon of experience and
                exploiting our skills to the fullest potential for a holistic
                development and overall betterment.
              </p>
            </div>
          </article>
          <figure className="col-lg-6 col-sm-12">
            <img src={CareerImg} alt="Career Img" />
          </figure>
          {/* <Link to="/career" className="SeeMore">
            See More{" "}
          </Link> */}
        </div>
      </section>
      <CareerCard/>
    <CareerForm/>
    <Footer/>
      </section>
     
    </>
  );
};
export default Career;
