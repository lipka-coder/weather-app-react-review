import React from "react";
import Weather from "./Weather";
import "./weather.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Mexico City" />
    </div>
  );
}

export default App;
