import React, { useState } from "react";
import "./Styles/ContactUs.scss";
import WhatSay from "../images/WhatSay.png";
import emailjs from '@emailjs/browser';

function ContactUS() {
  // const [userInput, setUserInput] = useState();
  const [saveEmail, setSaveEmail] = useState("");
  const FullEmail = document.getElementById("Email");
  const SuccessEmailData = document.getElementById("successEmail");
  const Smile = document.querySelector(".Smile");
  const EmailHandel = (e) => {
    e.preventDefault();

    if (!saveEmail.trim()) {
      FullEmail.innerHTML = "Email Is Required";
      console.log("Email IS required");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(saveEmail)
    ) {
      FullEmail.innerHTML = "Email Address Is Invalid";
    } else {
      FullEmail.innerHTML = "";
      SuccessEmailData.innerText = "Thanks For Contact Our Team ";
      SuccessEmailData.style = "display:table";
      Smile.style = "display:table";


      // Submit Email data  after validation complete
      emailjs.sendForm('service_okqz4qu', 'template_7iuaz5u',e.target, 'user_uzz08ZQmNe3u52TP4v57C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });



      // Set interval Function 
      setInterval(() => {
        HideSuccessMassege();
      }, 8000);
    }
  };

  function HideSuccessMassege() {
    SuccessEmailData.innerText = "Thanks For Contact Our Team ";
    SuccessEmailData.style = "display:none";
    Smile.style = "display:none";
  }
  function EmailText(e) {
    setSaveEmail(e.target.value);
  }

  return (
    <section className="ContactUsMain" id="Contact">
      <h2>What Our Clients Say</h2>
      <div className="container d-flex flex-wrap">
        <figure className="col-lg-6 col-sm-12">
          <img src={WhatSay} alt="WhatSay" />
        </figure>
        <article className="col-lg-6 col-sm-12">
          <p>
            Lets get connected and
            <br /> Start finding our creativity
          </p>
          <form action="" onSubmit={EmailHandel} autoComplete="off" noValidate>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                onChange={EmailText}
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p id="Email"></p>
            <p id="successEmail"></p>
            <span className="Smile">
              <i className="fas fa-smile-beam"></i>
            </span>
          </form>
        </article>
      </div>
    </section>
  );
}

export default ContactUS;
