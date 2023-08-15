import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './UI/pages/Navigation/Navigation';
import CityWeather from './UI/pages/WeatherForecastPage/CityWeather';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="CityWeather" index element={<CityWeather />}/>
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
