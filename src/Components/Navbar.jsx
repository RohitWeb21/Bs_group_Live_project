import "./navbarStyle.css";
import React, { useState } from "react";
import logo from "../images/BsLogo.png";
import Logo2Video from "../Videos/Logo2Video.webp";
import { NavLink} from "react-router-dom";
const Navbar = () => {
  const [navButton, setNavButton] = useState("fas fa-bars");
  const toggleMenu = () => {
    document.querySelector(".Main_menu").classList.toggle("ToggleClass");
    document
      .querySelector(".page_menu")
      .classList.toggle("page_menu_btn_add_css");
    document.querySelector(".page_menu_button");
    if (navButton == "fas fa-bars") {
      setNavButton("fas fa-times");
    } else {
      setNavButton("fas fa-bars");
    }
    document.querySelector(".header").classList.toggle("header_height");
    console.log("hello");
  };

  return (
    <>
      <header className="header mainHeight">
        <nav className="navbar">
          <img
            src={Logo2Video}
            className="logo"
            alt="Bs Group Logo"
            data-aos="fade-right"
          />
          <div className="Main_menu" data-aos="fade-left">
            <NavLink exact={true}  activeClassName="activeClass"  to="/Bs_group_Live_project">Home</NavLink >
            <NavLink exact={true}  activeClassName="activeClass"  to="/Bs_group_Live_project/service">Service</NavLink >
            <NavLink exact={true}  activeClassName="activeClass"  to="/Bs_group_Live_project/about">About</NavLink >
            <NavLink exact={true}  activeClassName="activeClass"  to="/Bs_group_Live_project/portfoilo">Portfolios</NavLink >
            <NavLink exact={true}  activeClassName="activeClass"  to="/Bs_group_Live_project/career">Career</NavLink >
            <NavLink exact={true}  activeClassName="activeClass"  to="/Bs_group_Live_project/contact">Contact </NavLink >
          </div>
          <div className="page_menu" onClick={toggleMenu}>
            <div className="page_menu_button">
              <i className={navButton}></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
