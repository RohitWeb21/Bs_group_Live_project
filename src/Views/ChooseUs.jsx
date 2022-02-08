import "./Styles/ChooseUs.scss";
const ChooseUs = () => {
  return (
    <>
      <section className="container " id="ChooseUs">
        <section className=" ChooseUSMainSection">
          <article className="col-lg-7 col-sm-12 ">
            <h2>Why Choose Us ?</h2>
            <h3>Because professionals choose us!</h3>
            <ul>
              <p>
                Do you want to see your brand reach new heights and stand out of
                the crowd? Well, you've come to the perfect place for it then.
                Let us tell you how The BS group help you not only reach crowds
                but also really stick out from the common crowd.
              </p>
              <li className="ChooseUSList">
                We believe in perfection. Creating content is an art, and we
                acknowledge that wholeheartedly, we want your work to be unique
                in every way possible. Once we know how to help you out, we
                assure you that you can consider yourself free of that burden
              </li>
              <li className="ChooseUSList">
                We understand each client has different points of view and
                opinions regarding what they're exactly looking for, and that's
                what we are here for. We want to know your story and experience
                and then deliver the perfect services for you!
              </li>
              <li className="ChooseUSList">
                Professionalism is the key to success; that's why we have
                various and numerous departments dedicated to each and every
                service we provide. In this way, we can ensure that the result
                we'll curate and create for you will always be at the top of its
                game and the best quality. In addition, we have trained
                professionals working in these same lines and they know the
                secret behind the success of the best quality
              </li>
            </ul>
            <button className="DiscoverMoreBtn">Discover More</button>
          </article>
          <figure className="col-lg-5 col-sm-12">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-lg-5 col-sm-12">
                <img
                  className="col-lg-12 col-sm-6 mt-4"
                  src="https://mobileecosystemforum.com/wp-content/uploads/2021/11/61290d13623acf8451a5683d_reshot-illustration-digital-marketing-team-G73CP2VE8M-p-1080.png"
                  alt=" Videos Images"
                />
                <img
                  className="col-lg-12 col-sm-6 mt-4"
                  src="https://mobileecosystemforum.com/wp-content/uploads/2021/11/61290d13623acf8451a5683d_reshot-illustration-digital-marketing-team-G73CP2VE8M-p-1080.png"
                  alt=" Videos Images"
                />
              </div>
              <div className="col-lg-5 col-sm-12 ">
                <img
                  className="col-lg-12 col-sm-6 mt-4"
                  src="https://mobileecosystemforum.com/wp-content/uploads/2021/11/61290d13623acf8451a5683d_reshot-illustration-digital-marketing-team-G73CP2VE8M-p-1080.png"
                  alt=" Videos Images"
                />
                <img
                  className="col-lg-12 col-sm-6 mt-4"
                  src="https://mobileecosystemforum.com/wp-content/uploads/2021/11/61290d13623acf8451a5683d_reshot-illustration-digital-marketing-team-G73CP2VE8M-p-1080.png"
                  alt=" Videos Images"
                />
              </div>
            </div>
          </figure>
        </section>
      </section>
    </>
  );
};
export default ChooseUs;
