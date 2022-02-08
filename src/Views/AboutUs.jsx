import React from "react";
import AboutUsImg from "../images/aboutUs.png";
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
              <br />
              With the utmost professionalism, BS Group provide high-quality
              designs and perfect services. For the convenience of our clients,
              we have an active support system through which you can contact us.
              <br />
              <br />
              The main vision of the BS Group is "Coming together is a
              beginning, keeping together is progress, and working together is a
              success."
              <br/>
              <br/>
              <p id="demo" className="collapse">
              BS Group intends to generate employment at a steady rate. We aim
              to create a granular view of who needs help to keep their job and
              to equip the youth with the right opportunities by generating a
              productive workforce. BS Group started its operations with one
              member and now we have more than 100+ members.
              <br />
              <br />
           
              The company is authorised as Registered LLP and as MSME under
              Government of India. Moreover, it is also recognised as start-up
              under Government of India.
              <br />
              <br />
             
              It is the first company to tie up with Zomato for its employees'
              benefit. More than 2000+ designs have been created/flourished by
              our company and we are Constantly expanding new talent, we are on
              a hiring spree with rapid growth and entering into different
              companies, such as Naya Gurukul, which is a trade mark of BS
              GROUP.
              <br />
              <br />
            
              We have recently been featured in one of the global magazines-
              Business Connect, within one year of getting into business. Our
              success speaks through our satisfied client base.
            </p>
            </p>
            
           
            {/* button    */}
            <div>
              <button
                className="DiscoverMoreBtn"
                data-bs-toggle="collapse"
                data-bs-target="#demo"
              >
                Discover More
              </button>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};
export default AboutUs;
