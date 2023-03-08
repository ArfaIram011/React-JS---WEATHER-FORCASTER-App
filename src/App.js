import React,{useState} from 'react'
import './components/css/Style.css';
import './App.css';
import axios from "axios";
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';


function App() {
  const [weatherResult,setweatherResult]=useState(null)
  
  const onSearchSubmit = async (searchInputValue) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=ca261c971d5638db9d4d6cbccc1f093d`)
    console.log(response.data)
    setweatherResult(response.data)
    console.log(weatherResult)
 }
  return (
   
     <div className="container my-5">
                <h1 className="text-center title">Weather in</h1>
                 <CitySearch onSearchSubmit = {onSearchSubmit} />
                 {weatherResult ?  <WeatherCard weatherResult = {weatherResult} /> : <div></div>}
            </div>
    
  )
}

export default App