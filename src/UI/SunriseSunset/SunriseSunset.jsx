import React from "react";
import "./SunriseSunset.css";
function SunriseSunset({ weather }) {
  if (weather !== undefined) {
    const sunrise = weather
      ? weather.forecast.forecastday[0].astro.sunrise
      : "00:00";
    const sunset = weather
      ? weather.forecast.forecastday[0].astro.sunset
      : "00:00";

    return (
      <div className="sun_container">
        <div className="info">
          <div>SunRise</div>
          <div>{sunrise}</div>
        </div>

        <div className="info">
          <div>SunSet</div>
          <div>{sunset}</div>
        </div>
      </div>
    );
  }
}

export default SunriseSunset;
