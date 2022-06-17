import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
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
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-purple"
                />
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
          <div className="city-weather col-6">
            <h1>{props.defaultCity}</h1>
            <ul>
              <li>
                Last updated:
                <FormattedDate date={weather.date} />
              </li>
              <li className="weather-description">{weather.description}</li>
            </ul>
          </div>
        </div>
        <div className="row ps-2">
          <div className="col-6">
            <img
              src={weather.iconUrl}
              alt={weather.description}
              className="weather-icon"
            />
            <span className="temperature">
              {Math.round(weather.temperature)}
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
              <li>Pressure: {weather.pressure} hPa</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "08c89d7c2dd394c882a212087337db19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&&units=metric`;
    axios.get(apiUrl).then(showWeather);

    return `Loading...`;
  }
}
