import React from "react";
import "./Rainbars.css";

function Rainbars({ weather }) {
  const now = new Date();
  let addedHours = 0;
  let addedRainChances = 0;

  const hours = weather.forecast.forecastday[0].hour.flatMap((time) => {
    if (addedHours < 10 && time.time_epoch * 1000 > now) {
      addedHours++;
      return [time.time.split(" ")[1]];
    }
    return [];
  });

  const hoursRain = weather.forecast.forecastday[0].hour.flatMap((time) => {
    if (addedRainChances < 10 && time.time_epoch * 1000 > now) {
      addedRainChances++;
      return [time.chance_of_rain];
    }
    return [];
  });

  const TimeRainPercents = hours.map((time, index) => ({
    time: time,
    rainPercent: hoursRain[index],
  }));
  let id = 0;
  return (
    <div className="Container">
      <div className="header">Rain Chance by hours</div>
      <div>
        {TimeRainPercents.map((hour) => (
          <div className="Rainbar" key={hour.time + id++}>
            <div style={{ width: `${60}px` }}>{hour.rainPercent}%</div>
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
    </div>
  );
}

export default Rainbars;

function EmptyRainbars() {
  const TimeRainPercents = [];
  for (let i = 0; i < 10; i++) {
    TimeRainPercents.push({ time: "00:00", rainPercent: 0 });
  }
  let id = 0;
  return (
    <div className="Container">
      <div className="header">Rain Chance by hours</div>
      <div>
        {TimeRainPercents.map((hour) => (
          <div className="Rainbar" key={hour.time + id++}>
            <div style={{ width: `${60}px` }}>{hour.rainPercent}%</div>
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
    </div>
  );
}

export { EmptyRainbars };
