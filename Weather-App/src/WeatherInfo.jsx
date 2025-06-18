import React from 'react'

function WeatherInfo({ WeatherData }) {
    if (!WeatherData) return null;
    return (
        <div>
            <h3>{WeatherData.name},{WeatherData.sys.country}</h3>
            <p>Sıcaklık: {Math.floor(WeatherData.main.temp)}°C</p>
            <p>{WeatherData.weather[0].description}</p>
            <p>Rüzgar: {WeatherData.wind.speed} KM/H</p>
            <p>Bulut: %{WeatherData.clouds.all}</p>


        </div>

    )
}

export default WeatherInfo