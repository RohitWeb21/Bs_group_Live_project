import React, { useState } from "react";
import IndiaCities from "./JsonFiles/IndiaCities.json";
import "./Styles/CareerInnerPage.scss";
import LeftImage from "../images/LeftFormImage.png";
// import GooglePicker from "react-google-drive-picker";
// import * as yup from 'yup';
// validation start

const CareerForm = () => {
  const [fileData, setFileData] = useState("");

  const initialState = {
    Fname: "",
    Lname: "",
    Email: "",
    Number: "",
    ApplyingPosition: "",
    Country: "",
    City: "",
    Address: "",
    Textarea: "",
    file: "",
  };
  const [formData, setFormData] = useState(initialState);
  const {
    Fname,
    Lname,
    Email,
    Number,
    ApplyingPosition,
    Country,
    City,
    Address,
    Textarea,
    file,
  } = formData;

  // All allRecords
  const [allRecords, setAllRecords] = useState([]);
  // Errors UseState
  const [errors, setErrors] = useState({});

  // validation
  function InputChangeHandel(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // cities Validation
  const [city, setCity] = useState([]);
  const countryHandel = (e) => {
    const ValCountry = e.target.value;
    if (ValCountry == "india") {
      setCity(IndiaCities.cities);
    }
    InputChangeHandel(e);
  };

  const FileHandel = (e) => {
    formData.file = e.target.files;
    console.warn(formData.file);
    let reader = new FileReader();
    reader.readAsDataURL(formData.file[0]);

    reader.onload = (e) => {
      console.log("hello this is file data" + e.target.result);
      setFileData(e.target.result);
    };
    InputChangeHandel(e);
  };

  // Submit Validation Start
  function SubmitForm(e) {
    console.log("i am clicked");
    e.preventDefault();
    const newRecord = {
      ...formData,
      id: new Date().getTime().toString(),
    };
    setAllRecords({ ...allRecords, newRecord });
    console.log(allRecords);

    // error Validation Start

    // first name validation
    !formData.Fname.trim()
      ? (errors.Fname = "First name is required *")
      : formData.Fname.length < 3
      ? (errors.Fname = "Enter a valid first name *")
      : (errors.Fname = "");

    // last name validation
    !formData.Lname.trim()
      ? (errors.Lname = "First name is required *")
      : formData.Lname.length <= 5
      ? (errors.Lname = "Enter a valid last name *")
      : (errors.Lname = "");

    // Email Validation

    formData.Email == ""
      ? (errors.Email = "Email is required *")
      : !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.Email)
      ? (errors.Email = "Email Address Is Invalid *")
      : (errors.Email = "");

    // contact number validation

    formData.Number == ""
      ? (errors.Number = "Contact Number Is Required *")
      : formData.Number.length < 10
      ? (errors.Number = "Contact number must have 10 digits *")
      : formData.Number.length > 12
      ? (errors.Number = "Enter valid contact number *")
      : (errors.Number = "");

    // Position Validation

    !formData.ApplyingPosition.trim()
      ? (errors.ApplyingPosition = "Fill Your Position *")
      : (errors.ApplyingPosition = "");

    // country And City
    !formData.Country.trim()
      ? (errors.Country = "Fill Your Country *")
      : (errors.Country = "");

    !formData.City.trim()
      ? (errors.City = "Fill Your City *")
      : (errors.City = "");

    // Address Validation
    !formData.Address.trim()
      ? (errors.Address = "Address is required *")
      : formData.Address.length <= 20
      ? (errors.Address = "Enter Minimum 20 Words *")
      : (errors.Address = "");

    //   Massage Validation

    !formData.Textarea.trim()
      ? (errors.Textarea = "Massage is required *")
      : formData.Textarea.length <= 50
      ? (errors.Textarea = "Enter Minimum 50 Words *")
      : (errors.Textarea = "");

    // File Validation
    formData.file == ""
      ? (errors.file = "Resume/CV Requred *")
      : (errors.file = "");
  }

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
    <main className="d-flex flex-wrap  VaryMainSection panel " id="CareerForm">
      <section className="col-lg-4 FormLeftImage">
        <h2 className="col-10 m-lg-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ea
          placeat dolor culpa nobis nesciunt quisquam itaque qui non aperiam!
        </h2>
        <img src={LeftImage} alt="Career Form Image" className="LeftImage" />
      </section>
      <section className="CareerFormInnerMain col-lg-8 col-sm-12">
        <div className="CareerInnerDiv ">
          <form className="CareerForm" onSubmit={SubmitForm}>
            {/* First Name And Last Name Fild  */}
            <section className="Name d-flex flex-wrap col-lg-12">
              <div className="col-lg-6 col-sm-12 FLname">
                <input
                  type="text"
                  name="Fname"
                  placeholder="First Name"
                  value={Fname}
                  onChange={InputChangeHandel}
                />
                {errors.Fname && <p className="ErrorMsg ErrorMsg2">{errors.Fname}</p>}
              </div>
              <div className="col-lg-6 col-sm-12 FLname">
                <input
                  type="text"
                  name="Lname"
                  placeholder="Last Name"
                  value={Lname}
                  onChange={InputChangeHandel}
                />
                {errors.Lname && <p className="ErrorMsg ErrorMsg2">{errors.Lname}</p>}
              </div>
            </section>

            {/* Email And Number Fild   */}
            <section className="Contect d-flex flex-wrap">
              <div className="col-lg-6 col-sm-12 ContectInnerDiv ">
                <input
                  type="Email"
                  name="Email"
                  placeholder="Email"
                  value={Email}
                  onChange={InputChangeHandel}
                />
                {errors.Email && <p className="ErrorMsg ErrorMsg2">{errors.Email}</p>}
              </div>
              <div className="col-lg-6 col-sm-12 ContectInnerDiv">
                <input
                  type="tel"
                  name="Number"
                  placeholder="Number"
                  value={Number}
                  onChange={InputChangeHandel}
                />
                {errors.Number && <p className="ErrorMsg ErrorMsg2">{errors.Number}</p>}
              </div>
            </section>

            {/* Applying For  */}
            <section className="ApplyPositionSection">
              <select
                className="ApplyingPosition"
                onChange={InputChangeHandel}
                name="ApplyingPosition"
                value={ApplyingPosition}
              >
                <option value="" >
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
              {errors.ApplyingPosition && (
                <p className="ErrorMsg">{errors.ApplyingPosition}</p>
              )}
            </section>

            {/* country Set Fild cities Filds */}
            <section className="CountryCity col-lg-12  d-flex flex-wrap">
              <section className="Country col-lg-6 col-sm-12">
                <select
                  name="Country"
                  id="Countrys"
                  value={Country}
                  onChange={countryHandel}
                >
                  <option  value="">
                    --Choose your Country--
                  </option>
                  <option value="india">India</option>
                </select>
                {errors.Country && <p className="ErrorMsg">{errors.Country}</p>}
              </section>

              {/* cities Filds */}
              <section className="City col-lg-6 col-sm-12">
                <select
                  name="City"
                  id="Citys"
                  value={City}
                  onChange={InputChangeHandel}
                >
                  <option  value="">
                    --Choouse your Cities--
                  </option>
                  {city.map((res, index) => {
                    return (
                      <option value={res} key={index}>
                        {res}
                      </option>
                    );
                  })}
                </select>
                {errors.City && <p className="ErrorMsg">{errors.City}</p>}
              </section>
            </section>

            {/* Address Fild   */}
            <section className="address">
              <input
                name="Address"
                type="address"
                placeholder="Address"
                className="AddressInput"
                value={Address}
                onChange={InputChangeHandel}
              ></input>
              {errors.Address && <p className="ErrorMsg">{errors.Address}</p>}
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
                value={Textarea}
                onChange={InputChangeHandel}
              />
              {errors.Textarea && <p className="ErrorMsg">{errors.Textarea}</p>}
            </section>

            {/* Cv Fils  */}
            <section className="ChooseFile">
              <div className="ChooseFileInnerDiv">
                <label> Choose Your CV </label>
                <br />
                <input
                  type="file"
                  name="file"
                  value={file}
                  onChange={FileHandel}
                 
                />
                {errors.file && <p className="ErrorMsg">{errors.file}</p>}
              </div>
            </section>
            {/* submit button    */}

            <input
              type="submit"
              value="Submit"
              className="Button"
            
            />
          </form>
        </div>
      </section>
    </main>
  );
};
export default CareerForm;
