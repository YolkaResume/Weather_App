import React, { useState } from "react";
import WeatherAPi from "../../../modules/API/WeatherApi";
import "./CityWeather.css";
import WeatherForecast from "../../Forecast/WeatherForecast";
import { EmptyWeatherForecast } from "../../Forecast/WeatherForecast";

const CityWeather = () => {
  const [CurrentCity, setCity] = useState("");
  const [DayliInfo, setInfo] = useState(null);

  const search = async () => {
    const weather = await WeatherAPi.getWeaklyWeather(CurrentCity);
    if (weather.current !== undefined) {
      setInfo(<WeatherForecast weather={weather}></WeatherForecast>);
    } else {
      alert(`info about ${CurrentCity} not found`);
    }
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  return (
    <div className="weatherForm">
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
    </div>
  );
};

export default CityWeather;
