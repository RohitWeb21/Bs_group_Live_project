import React from "react";
import AboutUsImg from "../images/AboutUsImg.png";
import "./Styles/AboutUS.scss";
const AboutUs = () => {
  return (
    <>
      <section className="container AboutUsMain" id="About">
        <h2 className="text-center">About Us</h2>
        <section className=" d-flex flex-wrap ">
          <figure className=" col-lg-4 col-md-12">
            <img src={AboutUsImg} className="AboutUsImg" />
          </figure>
          <article className="col-lg-8 col-md-12">
            <h2 className="col-lg-8 col-md-12">
              We Are Here For Business Solution Ideas
            </h2>
            <p className="col-lg-10 col-md-12">
              BS Group works on brand core values which make a brand unique,
              superior, differentiated, valuable and successful. We are
              responsible for developing a brand strategy for a company's target
              market and maintaining brand integrity across all company
              marketing initiatives and communications, and may manage a
              portfolio of products.
              <br />
              With the utmost professionalism, BS Group provide high-quality
              designs and perfect services. For the convenience of our clients,
              we have an active support system through which you can contact us.
              <br />The main vision of the BS Group is "Coming together is a
              beginning, keeping together is progress, and working together is a
              success."
            </p>

            {/* button    */}
            <div>
              <button className="DiscoverMoreBtn">Discover More</button>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
export default AboutUs;
