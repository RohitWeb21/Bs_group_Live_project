import "./Styles/WorkingProg.scss";

import InitialProgress from "../images/InitialProgress-1.png";
import roughSketch from "../images/roughSketch.png";
import rawWebsite from "../images/rawWebsite.png";
import testing from "../images/testing.png";
import dilevey from "../images/dilevey.png";
// import { useState } from "react";

const WorkingProg = () => {
  return (
    <>
      <section className="mainWorkingSection" id="WorkingProgress">
        <h2 className="WorkingHeading">Our Working Progress</h2>
        <p className="SubHeadding col-lg-5 col-sm-10 text-center mx-auto">
          Lorem ipsum dolor sit amat, consecrator advising elite, sed do elusion
          tempore incident ut laborer et dolor magna aliqua. Ut enim ad minim
          venial, quia nostrum exercitation ullages labor's nisi ut aliquot ex
          ea commode consequent
        </p>
        <section className=" Designclass">
          {/* First   */}
          <section className="col-lg-2 col-md-6 col-sm-12 WorkingCardMainDesign ">
            <img src={InitialProgress} alt="InitialProgress Image" />
            <h2>Initial Team Meet</h2>
            <p>
              Our Team will have a virtual meeting with the Receiving Party to
              get all the requirements regarding the website.
            </p>
          </section>

          {/* secound   */}

          <section className="col-lg-2 col-md-6 col-sm-12 WorkingCardMainDesign ">
            <img src={roughSketch} alt="Rough Sketch Image" />
            <h2>Rough Sketch</h2>
            <p>
              Based on the Receiving Party’s requirements, our team will prepare
              a rough sketch for the website and will present it to the
              Receiving Party.
            </p>
          </section>

          {/* three  */}
          <section className="col-lg-2 col-md-6 col-sm-12 WorkingCardMainDesign ">
            <img src={rawWebsite} alt="Raw Website Design Image" />
            <h2>Raw Website Design</h2>
            <p>
              After getting approval for rough sketch, our team will design the
              website according to the sketch and will present the raw website
              design to the Receiving Party for getting approval
            </p>
          </section>

          {/* four  */}
          <section className="col-lg-2 col-md-6 col-sm-12 WorkingCardMainDesign ">
            <img src={testing} alt="Testing Image" />
            <h2>Testing</h2>
            <p>
              After getting approval for website design, our team will start the
              testing process to check all the functions of the website,
              including its alignment and framework.
            </p>
          </section>

          {/*five*/}

          <section className="col-lg-2 col-md-6 col-sm-12 WorkingCardMainDesign ">
            <img src={dilevey} alt="Final Delivery Image" />
            <h2>Final Delivery</h2>
            <p>
              After testing, our team will have a meeting with Receiving Party
              for the final delivery of the product. Receiving Party will also
              be provided with backend access to the website.
            </p>
          </section>
        </section>
      </section>
    </>
  );
};
export default WorkingProg;
