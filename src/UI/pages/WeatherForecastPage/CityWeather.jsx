import React, { useState } from "react";
import WeatherAPi from "../../../modules/API/WeatherApi";
import "./CityWeather.css";
import WeatherForecast from "../../Forecast/WeatherForecast";
import { EmptyWeatherForecast } from "../../Forecast/WeatherForecast";
import Rainbars from "../../Rainbars/Rainbars";

const CityWeather = () => {
  const [CurrentCity, setCity] = useState("");
  const [DayliInfo, setInfo] = useState(null);
  const [weather,setWeather] = useState(null)
  const search = async () => {
    try {
      const weatherData = await WeatherAPi.getWeaklyWeather(CurrentCity);
  
      if (weatherData !== null) {
        setWeather(weatherData);
        setInfo(<WeatherForecast weather={weatherData}></WeatherForecast>);
      } else {
        alert(`Info about ${CurrentCity} not found`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  return (
    <div className="weatherForm">
      <main>
      <div className="dayliTitle">
        <h2>
          {currentYear} {currentMonth} {currentDay}
        </h2>
        <div className="searcher">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search Location Here" />
          <button onClick={search}>Search</button>
        </div>
      </div>
      {DayliInfo ? DayliInfo : <EmptyWeatherForecast />}
      </main>
      <aside>{weather == null ? <div>1</div> : <Rainbars weather={weather}/>}</aside>
      
      
    </div>
  );
};

export default CityWeather;
