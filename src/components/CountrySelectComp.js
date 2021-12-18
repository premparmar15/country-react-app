import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../apis/fakeApis";
import { fetchCountriesList } from "../redux/actions.js/countryActions";
import { AddCountry } from "./AddCountry";
import TableComp from "./TableComp";

const CountrySelectComp = () => {

  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)
  const [selected, setSelected] = useState([]);
  //const [countries , setCountries] = useState([]);
  const [countryNames , setCountryNames] = useState([]);
  const [isOpen, setOpen] = useState(false);
  let options = []

  countries && countries.countries && countries.countries.map((country) => (
    options.push({label: country.name, value: country.name})
  ))

  const selectedOptions = (e) => {
    setSelected(Array.isArray(e) ? e.map((x) => x) : [])
    setCountryNames(Array.isArray(e) ? e.map((x) => x.label) : [])
  }

  const handleModel = (flag) => {
    setOpen(flag)
  }
  const addCountry = (data) => {
    countries.countries.push(data)
  }
  
  useEffect(() => {
      fetchCountries()
      .then((resp) => {
          let response = resp;
          //console.log(response.data)
          //setCountries(response.data);
          dispatch(fetchCountriesList(response.data.countries))
      }
      )
      .catch((err) => {
          console.log(err)
      })
      
  }, [dispatch])

  return (
    <div className="row">
      <h1>Select Countries</h1>
      <div className="col-sm-6"><MultiSelect
        options={options}
        value={selected}
        onChange={selectedOptions}
        labelledBy="Select"
        overrideStrings={{
          allItemsAreSelected: "All Countries",
          noOptions: "No options",
          selectAll: "Select All",
          selectSomeItems: "Select Country",
        }}
      />
      </div>
      <div className="col-sm-6"><button type="button" className="btn btn-primary" onClick={()=>handleModel(true)} >Add Country</button></div>
      {isOpen && <AddCountry isOpen={isOpen} handleModel={handleModel} addCountry={addCountry}/>}
      <TableComp  countryNames={countryNames} countries={countries}/>
    </div>

  );
};

export default CountrySelectComp;