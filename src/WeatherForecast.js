import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className="col-2 mt-3">
                  <div className="weather-forecast" key={index}>
                    <WeatherForecastDay forecastData={dailyForecast} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "08c89d7c2dd394c882a212087337db19";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
