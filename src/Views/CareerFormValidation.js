import { useState } from "react";
import IndiaCities from "./JsonFiles/IndiaCities.json"
const Validation = () => {
  // const [countrys, setCountrys] = useState([]);
  const [city, setCity] = useState([]);
  const [CountryIndex, setCountryIndex] = useState();
 
  const countryHandel = (e) => {
  const ValCountry=e.target.value;
  console.log(ValCountry)
   if(ValCountry=="india"){
    setCity(IndiaCities)
    console.log(city.cities)
   }
  }
  return {
  
    city,
    countryHandel,
   
  };
};
export default Validation;
