import React from "react";
import "./weather.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="col-2 mt-3 forecast">
      <p className="mb-0 weekday">Thu</p>
      <p className="mb-0 week-date">Jun 14</p>
      <WeatherIcon code={"01d"} size={45} />
      <p>
        <span className="weekday-temp">26°C</span>
        <span className="weekday-temp-min"> 20°C</span>
      </p>
    </div>
  );
}
