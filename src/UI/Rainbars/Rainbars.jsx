import React from "react";
import "./Rainbars.css";

function Rainbars({ weather }) {
  const now = new Date();
  let addedHours = 0;
  let addedRainChances = 0;

  const hours = weather.forecast.forecastday[0].hour.flatMap((time) => {
    if (addedHours < 6 && time.time_epoch * 1000 > now) {
      addedHours++;
      return [time.time.split(" ")[1]];
    }
    return [];
  });

  const hoursRain = weather.forecast.forecastday[0].hour.flatMap((time) => {
    if (addedRainChances < 6 && time.time_epoch * 1000 > now) {
      addedRainChances++;
      return [time.chance_of_rain];
    }
    return [];
  });

  const TimeRainPercents = hours.map((time, index) => ({
    time: time,
    rainPercent: hoursRain[index],
  }));


  return (
    <div className="Container">
      {TimeRainPercents.map((hour) => (
        <div  className="Rainbar">
          <div style={{ width: `${30}px` }}>{hour.rainPercent}%</div>
          <div className="progress">
            <div 
              className="percentFill"
              style={{ width: `${hour.rainPercent}%` }}
            >
                <div className="pointer"></div>
            </div>
          </div>

          <div style={{ width: `${40}px` }}>{hour.time}</div>
        </div>
      ))}
    </div>
  );
}

export default Rainbars;
