import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import './custom.css'

const TableComp = ({countries, countryNames}) => {
  const selectedCountries = useSelector(state => state.countries.countries)
  const [countryList, setCountryList] = useState([])
  //console.log(countryNames,countries)
  //const {countries: selectedCountries} = countries;
  //console.log("selectedCountries",selectedCountries)

 useEffect(() => {
  setCountryList(selectedCountries && selectedCountries.filter((item) => countryNames.includes(item.name)))
 }, [countryNames, selectedCountries])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
            <th>Rank</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {countryList && countryList.map((country) => (
              <tr key={country.name+'_'+country.rank}>
              <td>{country.name}</td>
              <td>{country.continent}</td>
              <td>{country.rank}</td>
              <td><img src={country.flag?`${process.env.PUBLIC_URL}/${country.flag}`:  `${process.env.PUBLIC_URL}/images/zimbabwe.png`} alt=""></img></td>
            </tr>
          ))}
          
        </tbody>

      </table>
    </div>
  )
}

export default TableComp;
