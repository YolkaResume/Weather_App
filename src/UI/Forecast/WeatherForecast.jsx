import React from "react";
import "./WeatherForecast.css";
import LineChart from "../Charts/LineChart";
const WeatherForecast = ({ weather }) => {
  const { wind_kph, pressure_mb } = weather.current;
  const todayRainChance = weather.forecast.forecastday[0].day.daily_chance_of_rain;
  const todayUvIndex = weather.current.uv;
  

  

  return (
    <div className="container">
      <div className="head">Today overview</div>
      <div className="dailyInfo">
        <div>
          <div>Wind Speed</div>
          <div>{wind_kph} km/h</div>
        </div>
        <div>
          <div>Rain Chance</div>
          <div>{todayRainChance}%</div>
        </div>
        <div>
          <div>UV Index</div>
          <div>{todayUvIndex}</div>
        </div>
        <div>
          <div>Pressure</div>
          <div>{pressure_mb} mb</div>
        </div>



      </div>
      
    </div>
  );  
};

export default WeatherForecast;

const EmptyWeatherForecast = () => {
  return (
    <div className="container">
      <div className="head">Today overview</div>
      <div className="dailyInfo">
        <div>
          <div>Wind Speed</div>
          <div>km/h</div>
        </div>
        <div>
          <div>Rain Chance</div>
          <div>%</div>
        </div>
        <div>
          <div>UV Index</div>
          <div></div>
        </div>
        <div>
          <div>Pressure</div>
          <div>mb</div>
        </div>
        
      </div>
    </div>
  );
};

export { EmptyWeatherForecast };
