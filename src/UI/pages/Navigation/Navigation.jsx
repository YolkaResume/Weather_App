import { Outlet, Link } from "react-router-dom";
import React from 'react'
import "./NavigationStyles.css"
const Navigation = () => {
  return (
    <>
      <nav>
            <Link to="CurrentWeather" className="Link">Current Weather</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Navigation;