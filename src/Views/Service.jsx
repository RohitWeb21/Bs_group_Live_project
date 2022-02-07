import "./Styles/Service.scss";
import "./Styles/ServiceCardSection.scss";
import { useState } from "react";
import CardChangeAllData from "./CardChangeAllData";
// import { useEffect } from "react";
const Service = () => {
  const {
    DataChange,
    cardData,
    mainHeading,
    imgChangeState,
    cardArticleData1,
    cardArticleData2,
    cardArticleData3,
    cardArticleData4,
    cardArticleData5,
  } = CardChangeAllData();

  return (
    <>
      <section className=" mainSection" id="Service">
        <section className="Services_Headings">
          <h2>service</h2>
          <h3>what we offer</h3>
        </section>

        {/* Service Card Section Start */}

        <section className="Service_Card_Section container  d-flex flex-wrap">
          {cardData.map((res, index) => {
            return (
              <div
                className="CardSection col-lg-3 col-md-6 col-sm-12 "
                id={res.id}
                key={index}
                onClick={DataChange}
              >
                <img
                  src={res.image}
                  alt={res.alt}
                  id={res.id}
                  onClick={DataChange}
                />
                <h6 id={res.id} onClick={DataChange}>
                  {res.cardName}
                </h6>

                <i className="fas fa-caret-down " id={res.DownArrow}></i>
              </div>
            );
          })}
        </section>

        {/* Article section start  */}

        <section className="main_article_section">
          <h2>{mainHeading}</h2>
          <section className="container col-12 img_article d-flex flex-wrap">
            <figure className="col-lg-4 col-sm-12">
              <img src={imgChangeState} alt="" />
            </figure>
            <article className="col-lg-8 col-sm-12">
              <p className="CardArticle col-lg-10 col-md-12">
                {cardArticleData1}
                <br />
                <br /> {cardArticleData2}
                <br />
                <br /> {cardArticleData3}
                <br />
                <br /> {cardArticleData4}
                <br />
                <br />
                {cardArticleData5}
              </p>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};
export default Service;
