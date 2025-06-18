import { useState } from 'react'
import './App.css'
import Searchs from './Searchbar.jsx'
import Country from './Countryinfo.jsx';
import axios from 'axios';
import { useEffect } from 'react';
const BASE_URL = "https://restcountries.com/v3.1/name/";


function App() {
  //STATE
  const [CountryData, SetCountryData] = useState(null);
  const [loading, setLoading] = useState("");
  const [errors, SetError] = useState("");

  //APİ ÇAĞRISI
  const GetCountryData = async (cityName) => {
    setLoading(true)
    try {
      const response = await axios.get(`${BASE_URL}${cityName}`);

      SetCountryData(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      SetCountryData(null)
      SetError("HATA");
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <Searchs getCountry={GetCountryData} />
      <Country country={CountryData} loadingState={loading} error1={errors} />

    </div>
  )
}

export default App
