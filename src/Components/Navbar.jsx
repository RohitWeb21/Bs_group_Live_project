import "./navbarStyle.css";
import React, { useState } from "react";
import logo from "../images/BsLogo.png";
// import LogoVideo from "../Videos/LogoVideo.mp4";
import Logo2Video from "../Videos/Logo2Video.webp";
import logoGif from "../Videos/logoGif.gif";

const Navbar = () => {
  // document.getElementById('vid').play();
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



  // video play Js 

  // window.onload=document.querySelector(".logo").play();
  return (
    <>
      <header className="header mainHeight">
        <nav className="navbar">
          <img src={Logo2Video} className="logo" alt="Bs Group Logo" />
        
        {/* <video src={Logo2Video} autoPlay className="logo" /> */}

          <div className="Main_menu">
            <a href="#LandingPage">Home</a>
            <a href="#About">About</a>
            <a href="#Service">Service</a>
            <a href="#Portfolio">Portfolios</a>
            <a href="#Career">Career</a>
            <a href="#Contact">Contact </a>
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
