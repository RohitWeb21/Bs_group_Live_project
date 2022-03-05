import "./Styles/CareerCard.scss";
import BM from "../images/BM.png";
import CD from "../images/CD.png";
import GD from "../images/GD.png";
import SEO from "../images/SEO.png";
import SMM from "../images/SMM.png";
import WD from "../images/WD.png";
import WM from "../images/WM.png";
const CareerFormCard = () => {
  return (
    <section className="CareerCardMainSection" 
    >
      <section className="MainCardInner container">
          <a href="#CareerForm">
        <section className="CardInner CardInner1 ">
          <h3>Social Media Marketing</h3>
          <figure>
            <img src={SMM} />
          </figure>
          <div className="OverLay">
            <h3>Social Media Marketing</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>

        <a href="#CareerForm">
        <section className="CardInner CardInner2 ">
          <h3>Graphic Designing</h3>
          <figure>
            <img src={GD} />
          </figure>
           <div className="OverLay">
            <h3>Graphic Designing</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>

        <a href="#CareerForm">
        <section className="CardInner CardInner3 ">
          <h3>Web Development</h3>
          <figure>
            <img src={WD} />
          </figure>
           <div className="OverLay">
            <h3>Web Development</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>

        <a href="#CareerForm">
        <section className="CardInner CardInner4 ">
          <h3>Brand Management</h3>
          <figure>
            <img src={BM} />
          </figure>
           <div className="OverLay">
            <h3>Brand Management</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>

        <a href="#CareerForm">
        <section className="CardInner CardInner5 ">
          <h3>Domain Maintenance & Website Hosting</h3>
          <figure>
            <img src={WM} />
          </figure>
           <div className="OverLay">
            <h3>Domain Maintenance & Website Hosting</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>

        <a href="#CareerForm">
        <section className="CardInner CardInner6 ">
          <h3>Search Engine Optimization</h3>
          <figure>
            <img src={SEO} />
          </figure>
           <div className="OverLay">
            <h3>Search Engine Optimization</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>

        <a href="#CareerForm">
        <section className="CardInner CardInner7 ">
          <h3>Content Creation</h3>
          <figure>
            <img src={CD} />
          </figure>
           <div className="OverLay">
            <h3>Content Creation</h3>
            <label> Requar :</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              tempore omnis dolor neque nostrum voluptate?
            </p>
          </div>
        </section></a>
      </section>
    </section>
  );
};
export default CareerFormCard;
