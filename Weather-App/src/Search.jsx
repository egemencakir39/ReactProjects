import React, { useState } from 'react'

function Search({ getweather }) {
    const [cityName, setCityName] = useState("");

    const HandleChange = (e) => {
        setCityName(e.target.value);
    }

    const SearchFnc = () => {
        getweather(cityName);
        setCityName('');
    }
    return (
        <div>
            <input className='inp' type="text" placeholder='Şehir Giriniz..' onChange={HandleChange} value={cityName} />
            <button onClick={SearchFnc}>Ara</button>

        </div>
    )
}

export default Search