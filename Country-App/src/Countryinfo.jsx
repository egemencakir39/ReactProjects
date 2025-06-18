import React from 'react'
import './Countryinfo.css'

function Countryinfo({ country, loadingState }) {
    if (!country) return null;
    return (
        <div className='container'>
            <div className='loading'>
                {loadingState && <p style={{ color: "blue" }}>Yükleniyor...</p>}
            </div>
            <div className='flag'>
                <img src={country.flags.png} alt="" />
            </div>
            <div className='textinfo'>
                <h2>{country.name.common} / {country.name.official}</h2>
                <p>Capital: {country.capital}</p>
                <p>Continents: {country.continents}</p>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Time Zone: {country.timezones}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>

                <div className='BorderCountry'>
                    <h6>Border Country: </h6>
                    {country.borders?.map((border, index) => (
                        <p className='title' key={index}>
                            {border}
                            {index < country.borders.length - 1}
                        </p>
                    ))}

                </div>

            </div>


        </div>

    )
}

export default Countryinfo