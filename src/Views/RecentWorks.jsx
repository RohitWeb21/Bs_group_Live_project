import "./Styles/RecentWork.scss";
import GurukulLogo from "../images/GurukulLogo1.png"
import figtreelogo from "../images/figtreelogo.png"
import StrongLogo from "../images/StrongLogo.png"
function RecentWorks() {
  return (
    <>
      <section className="container RecentWorksMain mt-5" id="Portfolio">
        <article>
          <h2>Our Recent Works</h2>
          <p className="col-lg-7 col-sm-12 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </article>
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active card1">
              
                <img src={figtreelogo} alt="figtree logo" />
                <div>
                <p >
                  Company Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Voluptatum aperiam officia voluptates culpa. Company
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="DiscoverMoreBtn">Discover More</button>
                </div>
              </div>
              <div className="carousel-item card2">
              <img src={StrongLogo} alt="Gurukul Logo"  />
                <div>
                <p >
                  Company Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Voluptatum aperiam officia voluptates culpa. Company                 
                  aperiam officia voluptates culpa.
                </p>
                <button className="DiscoverMoreBtn">Discover More</button>
                </div>
              </div>
              <div className="carousel-item card3">
              <img src={GurukulLogo} alt="Gurukul Logo"  />
                <div>
                <p >
                  Company Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Voluptatum aperiam officia voluptates culpa. Company
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum 
                  aperiam officia voluptates culpa.
                </p>
                <button className="DiscoverMoreBtn">Discover More</button>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              {/* <i class="fas fa-caret-left carousel-control-prev-icon"></i> */}
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              {/* <i class="fas fa-caret-right carousel-control-next-icon"></i> */}
              <span
                className="carousel-control-next-icon text-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default RecentWorks;
