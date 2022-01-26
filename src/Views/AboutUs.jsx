import React from "react";
import AboutUsImg from "../images/AboutUsImg.png";
import "./Styles/AboutUS.scss";
const AboutUs = () => {
  return (
    <>
      <section className="container AboutUsMain">
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
              BS Group is a Social Media Management and Website Designing
              Company that caters to all of your business needs. We are
              responsible for developing, implementing, and overseeing long-term
              Digital Marketing campaigns as well as short-term advertising
              techniques and enhancing brand awareness, driving traffic to the
              company's website, and generating sales leads. Our team works on
              different areas of Web Design, including
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
