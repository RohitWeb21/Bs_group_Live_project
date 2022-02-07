import CareerImg from "../images/CareerImg.png";
import "./Styles/Career.scss";
const Career = () => {
  return (
    <>
      <section className="MainCareer container" id="Career">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                neque ullam? Facilis cumque eum deserunt quis voluptatem
                inventore cupiditate nisi. 
              </p> 
            </div>
          </article>
          <figure className="col-lg-6 col-sm-12">
            <img src={CareerImg} alt="Career Img" />
           
          </figure>
          <a href="#" className="SeeMore">See More </a>
        </div>

      </section>
    </>
  );
};
export default Career;
