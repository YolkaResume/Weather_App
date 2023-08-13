import React from "react";
import { useState } from "react";
import WeatherAPi from "../../../modules/API/WeatherApi";
import "./DayliWeather.css";
import DailyInfo from "../../DailyInfo/DailyInfo";
import { EmptyDailyInfo } from "../../DailyInfo/DailyInfo";
const CurrentWeather = () => {
  const [CurrentCity, setCity] = useState("");
  const [Info, setInfo] = useState(<EmptyDailyInfo></EmptyDailyInfo>);

  const search = async () => {
    const weather = await WeatherAPi.getDayliWeather(CurrentCity, 1);
    if (weather.current !== undefined) {
      setInfo(<DailyInfo weather={weather}></DailyInfo>);
    } else {
      alert(`info about ${CurrentCity} not found`)
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
          <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Search Location Here"/>
          <button onClick={search}>Search</button>
        </div>
      </div>

      {Info}
    </div>
  );
};
export default CurrentWeather;
