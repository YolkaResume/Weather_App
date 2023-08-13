import { Outlet, Link } from "react-router-dom";
import React from 'react'
import "./NavigationStyles.css"
const Navigation = () => {
  return (
    <>
      <nav>
            <Link to="DayliWeather" className="Link">Dayli Weather</Link>
            
      </nav>
      

      <Outlet />
    </>
  )
};

export default Navigation;