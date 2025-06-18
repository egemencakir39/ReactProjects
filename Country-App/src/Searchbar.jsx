import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import CountryData from './Countryinfo.jsx';
import "./Searchbar.css"
import axios from 'axios';


function Searchbar({ getCountry }) {
    const [countryName, SetcountryName] = useState("")
    const getCountrys = () => {
        getCountry(countryName);
        SetcountryName("");
    }
    const OnChange = (e) => {
        SetcountryName(e.target.value)
    }

    return (
        <div className='Input'>
            <input type="text" placeholder='Ülke Giriniz' onChange={OnChange} value={countryName} />
            <button onClick={getCountrys}>Ara</button>

        </div>
    )
}

export default Searchbar