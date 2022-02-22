import React, { useState, useEffect } from "react";
import IndiaCities from "./JsonFiles/IndiaCities.json";
import "./Styles/CareerInnerPage.scss";
// import GooglePicker from "react-google-drive-picker";
// import * as yup from 'yup';

const CareerInnerPage = () => {
  // cities Validation
  const [city, setCity] = useState([]);
  const countryHandel = (e) => {
    const ValCountry = e.target.value;
    console.log(ValCountry);
    if (ValCountry == "india") {
      setCity(IndiaCities.cities);
    }
  };

  let files = null;
  const FileHandel = (e) => {
    files = e.target.files;
    console.warn(files);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      console.log("hello this is file data" + e.target.result);
    };
  };
  const handelSubmit = () => {};

  // const [openPicker, data, authResponse] = GooglePicker();
  // // const customViewsArray = [new google.picker.DocsView()]; // custom view
  // const handelSubmit = (e) => {
  //   e.priventDefault();
  //   openPicker({
  //     clientId: "",
  //     developerKey: "",
  //     viewId: "DOCS",
  //     // token: token, // pass oauth token in case you already have one
  //     showUploadView: true,
  //     showUploadFolders: true,
  //     supportDrives: true,
  //     multiselect: true,
  //     // customViews: customViewsArray, // custom view
  //   })
  // }
  // useEffect(() => {
  //   // do anything with the selected/uploaded files
  //   if(data){
  //     data.docs.map(i => console.log(i.name))
  //   }
  // }, [data])

  return (
    <section className="CareerFormInnerMain">
      <div className="CareerInnerDiv">
        <from className="CareerForm" onSubmit={handelSubmit}>
          {/* First Name And Last Name Fild  */}
          <section className="Name d-flex flex-wrap col-lg-12">
            <div className="col-lg-6 col-sm-12 FLname">
              <input type="text" name="Fname" placeholder="First Name" />
             <p>hello</p>
            </div>
            <div className="col-lg-6 col-sm-12 FLname">
              <input type="text" name="Lname" placeholder="Last Name" />
             <p>hello</p>
            </div>
          </section>

          {/* Email And Number Fild   */}
          <section className="Contect d-flex flex-wrap">
            <div className="col-lg-6 col-sm-12 ContectInnerDiv ">
              <input type="Email" name="Email" placeholder="Email" />
             <p>hello</p>
            </div>
            <div className="col-lg-6 col-sm-12 ContectInnerDiv">
              <input type="tel" name="Number" placeholder="Number" />
             <p>hello</p>
            </div>
          </section>

          {/* Applying For  */}
         <section className="ApplyPositionSection">
         <select className="ApplyingPosition">
            <option value="" selected>
              -- Choose Your Position --
            </option>
            <option value="Social Media Marketing">
              Social Media Marketing
            </option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Web Development">Web Development</option>
            <option value="Brand Management">Brand Management</option>
            <option value="Domain Maintenance & Website Hosting">
              Domain Maintenance & Website Hosting
            </option>
            <option value="Search Engine Optimization">
              Search Engine Optimization
            </option>
            <option value="Content Creation">Content Creation</option>
          </select>
         <p>hello</p>
         </section>

          {/* country Set Fild cities Filds */}
          <section className="CountryCity col-lg-12  d-flex flex-wrap">
            <section className="Country col-lg-6 col-sm-12">
              <select name="Country" id="Countrys" onChange={countryHandel}>
                <option selected value="">
                  --Choose your Country--
                </option>
                <option value="india">India</option>
              </select><p>hello</p>
            </section>
           
            {/* cities Filds */}
            <section className="City col-lg-6 col-sm-12">
              <select name="City" id="Citys">
                <option selected value="">
                  --Choouse your Cities--
                </option>
                {city.map((res, index) => {
                  return <option value={res}>{res}</option>;
                })}
              </select>
             <p>hello</p>
            </section>
          </section>

          {/* Address Fild   */}
          <section className="address">
            <input
              type="address"
              placeholder="Address"
              className="AddressInput"
            ></input>
              <p>hello</p>
          </section>

          {/* Massege Fild  */}
         <section className="TextareaSection">
         <textarea
            name="Textarea"
            id="TextArea"
            cols="30"
            rows="5"
            resize="off"
            placeholder="Why We Choose You"
            className="Massege"
          />  <p>hello</p>
         </section>

          {/* Cv Fils  */}
          <section className="ChooseFile">
            <div className="ChooseFileInnerDiv">
              <label> Choose Your CV </label>
              <br />
              <input type="file" name="file" onChange={FileHandel} />
             <p>hello</p>
            </div>
          </section>
          {/* submit button    */}

          <section className="SubmitSection">
            <button type="submit" id="CheckData">
              Submit
            </button>
          </section>
        </from>
      </div>
    </section>
  );
};
export default CareerInnerPage;
