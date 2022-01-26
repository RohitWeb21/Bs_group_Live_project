import "./Styles/WorkingProg.scss";
import WorkCardData from "./JsonFiles/WorkingCardData.json";
import { useState } from "react";

const WorkingProg = () => {
  const [workCardData, setWorkCardData] = useState(WorkCardData.WorkingCard);
  return (
    <>
      <section className="mainWorkingSection">
        <h2 className="WorkingHeading">Our Working Progress</h2>
        <p className="SubHeadding col-lg-5 col-sm-10 text-center mx-auto">
          Lorem ipsum dolor sit amat, consecrator advising elite, sed do
          elusion tempore incident ut laborer et dolor magna aliqua. Ut enim ad
          minim venial, quia nostrum exercitation ullages labor's nisi ut
          aliquot ex ea commode consequent
        </p>
        <section className="container Designclass">
          {workCardData.map((res, index) => {
            return (
             
                <section className="col-lg-3 col-md-6 col-sm-12 WorkingCardMainDesign p-3" key={index}>
                  <img src={res.image} />
                  <h2>{res.cardName}</h2>
                  <p>{res.tittle}</p>
                </section>
            
            );
          })}
        </section>
      </section>
    </>
  );
};
export default WorkingProg;
