import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  let city = "Lisbon";
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React JS {city} !!!</h1>
        <Weather city="Istanbul" />
      </header>
    </div>
  );
}

export default App;
