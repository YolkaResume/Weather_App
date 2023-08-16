import React, { useState } from "react";
import WeatherAPi from "../../../modules/API/WeatherApi";
import "./CityWeather.css";
import WeatherForecast from "../../Forecast/WeatherForecast";
import { EmptyWeatherForecast } from "../../Forecast/WeatherForecast";
import Rainbars from "../../Rainbars/Rainbars";
import SunriseSunset from "../../SunriseSunset/SunriseSunset";
import { EmptyRainbars } from "../../Rainbars/Rainbars";
import DateTranslate from "../../../modules/DateTranslate/DateTranslate";

const CityWeather = () => {
  const [CurrentCity, setCity] = useState("");
  const [DayliInfo, setInfo] = useState(null);
  const [weather,setWeather] = useState(null)
  const search = async () => {
    try {
      const weatherData = await WeatherAPi.getWeaklyWeather(CurrentCity);
  
      if (weatherData.current !== undefined && weatherData !== null) {
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
  const currentDay = currentDate.getDate();

  return (
    <div className="weatherForm">
      <main>
      <div className="dayliTitle">
        <h2>
          {currentYear} {DateTranslate.getCurrentMonthName()} {DateTranslate.getCurrentDayName()} {currentDay}
        </h2>
        <div className="searcher">
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search Location Here" />
          <button onClick={search}>Search</button>
        </div>
      </div>
      {DayliInfo ? DayliInfo : <EmptyWeatherForecast />}
      </main>
      <aside>
        {weather == null ? <EmptyRainbars/>:<Rainbars weather={weather}/>}
        {<SunriseSunset weather={weather}/>}
        </aside>
      
      
    </div>
  );
};

export default CityWeather;
