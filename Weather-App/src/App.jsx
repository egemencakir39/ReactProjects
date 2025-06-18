import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'
import Search from './Search'

const BASE_URL = `https://api.openweathermap.org/data/2.5/`
const key = "16a51ee406309a38e45ef48c1951dfd0"



function App() {

  const [weatherData, setWeatherData] = useState("");



  const GetWeatherData = async (cityName) => {
    const response = await axios.get(`${BASE_URL}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`)
    console.log(response.data);
    setWeatherData(response.data);
  }



  return (

    <div className="App">
      <Search getweather={GetWeatherData} />
      <WeatherInfo WeatherData={weatherData} />
    </div>
  );
}







export default App
