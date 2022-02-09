import AllCardClickData from "./JsonFiles/NewServices.json";
import "./Styles/Services.scss";
import React, { useState } from "react";
// import Images
import ServicesImg from "../images/Services.png";

// import Smm from "../images/Smm2.png";
// import Smm from "../images/Smm2.png";
// import Smm from "../images/Smm2.png";
const Services = () => {
  const [allData, setAllData] = useState(AllCardClickData.CardClickDataMore);
  //   console.log(allData)
  return (
    <section className="MainServices">
      <section className="Services_Headings">
        <h2>service</h2>
        <h3>what we offer</h3>
      </section>
      <div className="container">
        <section className="row">
          <figure className="col-lg-6 col-sm-12">
            <img src={ServicesImg} alt="Services" />
          </figure>
          <article className="col-lg-6 col-sm-12">
            {allData.map((res, index) => {
              return (
                <div key={index}>
                  <button
                    className="ShowData"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${res.id}`}
                  >
                    {res.Heading}
                  </button>
                  
                  <img
                    src={res.image}
                    id={res.id}
                    className="collapse"
                    alt={res.Heading}
                  />
                  <p id={res.id} className="collapse">
                    {res.Data1}
                    <br />
                    <br />
                    {res.Data2}
                    <br />
                    <br />
                    {res.Data3}
                    <br />
                    <br />
                    {res.Data4}
                    <br />
                    <br />
                    {res.Data5}
                    <br />
                    {res.Data6}
                  </p>
                </div>
              );
            })}
          </article>
        </section>
      </div>
    </section>
  );
};
export default Services;
