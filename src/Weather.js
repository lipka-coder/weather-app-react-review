import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Mexico City",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    pressure: 1005,
  };

  return (
    <div className="container-fluid">
      <div className="search-engine">
        <form className="weather-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type your city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-purple" />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current Location"
                className="btn btn-violet"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row ps-2">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li className="weather-description">{weatherData.description}</li>
          </ul>
        </div>
      </div>
      <div className="row ps-2">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="weather-icon"
          />
          <span className="temperature">{weatherData.temperature}</span>
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
            <li>Pressure: {weatherData.pressure} hPa</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
