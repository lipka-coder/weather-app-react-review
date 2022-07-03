import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function date() {
    let date = new Date(props.forecastData.dt * 1000);
    let month = date.getMonth();
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dateDay = date.getDate();

    return `${months[month]} ${dateDay}`;
  }

  return (
    <div className="forecast">
        <p className="mb-0 weekday">{day()}</p>
        <p className="mb-0 week-date">{date()}</p>
        <WeatherIcon code={props.forecastData.weather[0].icon} size={45} />
        <p>
          <span className="weekday-temp">
            {Math.round(props.forecastData.temp.max)}°C
          </span>
          <span className="weekday-temp-min">
            {" "}
            {Math.round(props.forecastData.temp.min)}°C
          </span>
        </p>
      </div>
  );
}
