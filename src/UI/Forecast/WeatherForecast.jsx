import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import LineChart from "../Charts/LineChart";
import InfoBlock from "../InfoBlock/InfoBlock";

const WeatherForecast = ({ weather }) => {

    const { wind_kph, pressure_mb } = weather.current;
    const todayRainChance = weather.forecast.forecastday[0].day.daily_chance_of_rain;
    const temp_c = weather.current.temp_c;

  

  const [chartData, setChartData] = useState({
    labels: weather.forecast.forecastday.map((forecastDay) => forecastDay.date),
    datasets: [
      {
        label: "Rain Chance",
        data: weather.forecast.forecastday.map(
          (forecastDay) => forecastDay.day.daily_chance_of_rain
        ),
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: weather.forecast.forecastday[0].hour.map(
        (h) => h.time.split(" ")[1]
      ),
      datasets: [
        {
          label: "Temp C",
          data: weather.forecast.forecastday[0].hour.map((h) => h.heatindex_c),
          borderColor: "black",
          borderWidth: 2,
          cubicInterpolationMode: "monotone",

          backgroundColor: "#165074",
          fill: true,
          pointBackgroundColor: "green",
        },
      ],
    });
  }, [weather]);

  return (
    <div className="container">
      <div className="head">Current overview</div>
      <div className="dailyInfo">
        <InfoBlock props={{ title: "Wind speed", body: `${wind_kph} km/h` }} />
        <InfoBlock
          props={{ title: "Rain Chance", body: `${todayRainChance}%` }}
        />
        <InfoBlock props={{ title: "Temperature C", body: `${temp_c} C` }} />
        <InfoBlock
          props={{ title: "Pressure", body: `${pressure_mb * 0.75} mmHg` }}
        />
      </div>
      <div className="lineChartContainer">
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
};

export default WeatherForecast;

const EmptyWeatherForecast = () => {
  const [chartData] = useState({
    labels: ["date", "date", "date", "date", "date", "date", "date"],
    datasets: [
      {
        label: "Temp C",
        data: [0, 0, 0, 0, 0, 0, 0],
        borderColor: "black",
        borderWidth: 2,
        cubicInterpolationMode: "monotone",

        backgroundColor: "#165074",
        fill: true,
        pointBackgroundColor: "green",
      },
    ],
  });

  return (
    <div className="container">
      <div className="head">Today overview</div>
      <div className="dailyInfo">
        <InfoBlock props={{ title: "Wind speed", body: `${0} km/h` }} />
        <InfoBlock props={{ title: "Rain Chance", body: `${0}%` }} />
        <InfoBlock props={{ title: "Temperature C", body: `${0} C` }} />
        <InfoBlock props={{ title: "Pressure", body: `${0 * 0.75} mmHg` }} />
      </div>
      <div className="lineChartContainer">
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
};

export { EmptyWeatherForecast };
