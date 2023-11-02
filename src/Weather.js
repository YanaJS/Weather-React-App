import React from "react";
import axios from "axios";
// import {TailSpin, Triangle, Rings} from "react-loader-spinner";
import * as Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
  return <Loader.ColorRing  colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]} height={100} width={100} />;
  // return <Rings type="Puff" color="#00BFFF" height={550} width={80} />;
}
