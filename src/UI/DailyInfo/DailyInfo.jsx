import React from "react";
import "./DailyInfo.css";

const DailyInfo = ({ weather }) => {
  const { wind_kph, pressure_mb } = weather.current;
  const rainChance = weather.forecast.forecastday[0].day.daily_chance_of_rain;
  const uvIndex = weather.current.uv;

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
          <div>{rainChance}%</div>
        </div>
        <div>
          <div>UV Index</div>
          <div>{uvIndex}</div>
        </div>
        <div>
          <div>Pressure</div>
          <div>{pressure_mb} mb</div>
        </div>
      </div>
    </div>
  );
};

export default DailyInfo;

const EmptyDailyInfo = () => {
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

export { EmptyDailyInfo };
