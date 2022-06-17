import React, { useState } from "react";
import "./weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <span>
        <span className="temperature">{Math.round(props.temperature)}</span>
        <span className="temperature-units">
          <span className="celsius unit-active">°C</span> |
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.temperature * 9) / 5 + 32);
    return (
      <span>
        <span className="temperature">{fahrenheit}</span>
        <span className="temperature-units">
          <a href="/" className="celsius" onClick={showCelsius}>
            °C
          </a>{" "}
          |
          <span className="fahrenheit unit-active">
            °F
          </span>
        </span>
      </span>
    );
  }
}
