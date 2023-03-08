import React from 'react'
import './css/Style.css'

function WeatherCard(props) {
    const spitOutCelcius = (kelvin) => {
        const celcius = Math.round(kelvin - 273.15);
        return celcius;
    }

  return (

    <div className="card rounded my-3 shadow-lg back-card" style={{height:'500px'}}>
    <div className="card-top text-center my-3">
        <div className="city-name my-3">
            <p>{props.weatherResult.name}</p>
           
        </div>
    </div>

    <div className="card-body my-5">
        <div className="card-mid row">
            <div className="col-8 text-center temp">
                <span>{spitOutCelcius(props.weatherResult.main.temp)}&deg;C</span>
            </div>
            <div className="col-4 condition-temp">
                <p className="condition">{props.weatherResult.weather[0].description}</p>
                <p className="high">Max:{spitOutCelcius(props.weatherResult.main.temp_max)}&deg;C</p>
                <p className="low">Min: {spitOutCelcius(props.weatherResult.main.temp_min)}&deg;C</p>
            </div>
        </div>

        <div className="card-bottom px-5 py-4 row" >
            <div className="col text-center" style={{margin:'20px auto',height:'100px'}}>
                <p>{spitOutCelcius(props.weatherResult.main.feels_like)}&deg;C
                <h2 >Feels Like</h2></p>
            </div>
            <div className="col text-center" style={{height:'100px'}}>
                <p>{props.weatherResult.main.humidity}%
                <h2 >humidity</h2></p>
            </div>
        </div>
    </div>
</div>
)
  
}

export default WeatherCard