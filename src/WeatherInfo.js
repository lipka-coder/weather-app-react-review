import React from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row ps-2">
        <div className="city-weather col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="weather-description">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row ps-2">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temperature-units">
            <a href="/" className="celsius active">
              °C
            </a>{" "}
            |
            <a href="/" className="fahrenheit">
              °F
            </a>
          </span>
        </div>
        <div className="col-6 weather-details">
          <ul>
            <li>Pressure: {props.data.pressure} hPa</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
