import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import LineChart from "../Charts/LineChart";

const WeatherForecast = ({ weather }) => {
  const { wind_kph, pressure_mb } = weather.current;
  const todayRainChance = weather.forecast.forecastday[0].day.daily_chance_of_rain;
  const temp_c = weather.current.temp_c;

  const [chartData, setChartData] = useState({
    labels: weather.forecast.forecastday.map((forecastDay) => forecastDay.date),
    datasets: [
      {
        label: "Rain Chance",
        data: weather.forecast.forecastday.map((forecastDay) => forecastDay.day.daily_chance_of_rain),
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: weather.forecast.forecastday.map((forecastDay) => forecastDay.date),
      datasets: [
        {
          label: "Rain Chance",
          data: weather.forecast.forecastday.map((forecastDay) => forecastDay.day.daily_chance_of_rain),
          backgroundColor: [
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
          cubicInterpolationMode: 'monotone',
          
          backgroundColor : "#165074",
          fill: true,
          pointBackgroundColor: 'green',
        },
      ],
    });
  }, [weather]);

  return (
    <div className="container">
      <div className="head">Current overview</div>
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
          <div>Temperature C</div>
          <div>{temp_c}</div>
        </div>
        <div>
          <div>Pressure</div>
          <div>{pressure_mb*0.75} mmHg</div>
        </div>
      </div>

      <div className="lineChartContainer">
        <LineChart chartData={chartData} />
      </div>
      
      
    </div>
  );  
};

export default WeatherForecast;

const EmptyWeatherForecast = () => {

  const [chartData, setChartData] = useState({
    labels: ["date","date","date","date","date","date","date"],
    datasets: [
      {
        label: "Rain Chance",
        data: [0,0,0,0,0,0,0],
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        cubicInterpolationMode: 'monotone',
        
        backgroundColor : "#165074",
        fill: true,
        pointBackgroundColor: 'green',
      },
    ],
  });

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
      <div className="lineChartContainer">
        <LineChart chartData={chartData} />
      </div>
    </div>
  );
};

export { EmptyWeatherForecast };