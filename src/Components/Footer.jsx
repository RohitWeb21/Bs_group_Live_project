import "./Footer.css";
import Logo from "../images/BsLogo.png";
const Footer = () => {
  return (
    <footer>
      <section>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div>
            <img src={Logo} alt="Bs Group Logo" />
            <h4>Perfection is our Tradition</h4>
            <div>
              <i className="fab fa-instagram fa-2x"></i>
              <i className="fab fa-facebook fa-2x"></i>
              <i className="fab fa-linkedin-in fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <table>
            <tbody>
              <tr>
                <td>
                  <h4> Menu</h4>
                </td>
                <td>
                  <h4>Important</h4>
                </td>
                <td>
                  <h4>Social Media</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Home</a>
                </td>
                <td>
                  <a href="#">Work With Us</a>
                </td>
                <td>
                  <a href="#">Instagram</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Services</a>
                </td>
                <td>
                  <a href="#">Career Options</a>
                </td>
                <td>
                  <a href="#">Facebook</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#">Choose Us</a>
                </td>
                <td></td>
                <td>
                  <a href="#">LinkedIn</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-12">
          <p>Phone Number : 011-------</p>
          <p>Email : abc@gmail.com</p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
