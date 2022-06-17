import React from "react";
import "./weather.css";

export default function FormattedDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    return `0${hours}`;
  }

  return (
    <div>
      Last updated: {day} {hours}:{minutes}
    </div>
  );
}
