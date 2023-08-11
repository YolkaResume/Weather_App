import React from 'react'
import { useState } from 'react'
import WeatherAPi from '../../../modules/API/WeatherApi';
import "./CurrentWeatherStyles.css"
const CurrentWeather =()=>{

    const [CurrentCity, setCity] = useState("");
    const [Info, setInfo] = useState();

    const search = async () => {
        const weather = await WeatherAPi.getCurrentWeather(CurrentCity)
        if(weather.current!=undefined){
            setInfo(
                <div className='output'>
                    <div>
                    <div>Temperature : {weather.current.temp_c}</div>
                    <div>Time : {weather.current.last_updated}</div>
                    <div>Humidity : {weather.current.humidity}</div>
                    <div>Cloud : {weather.current.cloud}</div>
                    <div>Feels Like : {weather.current.feelslike_c}</div>
                    </div>
                </div>
            )
        }else{
            setInfo(
                <div>
                    <p><b>No info</b></p>
                </div>
            )
        }
        
    }

    return (
        <div className='weatherForm'>
            <h2>Current weather</h2>
            <div className='searcher'>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
            <button onClick={search}>Search</button>
            </div>
            
            {Info}
        </div>
    );
}
export default CurrentWeather