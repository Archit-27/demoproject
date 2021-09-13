import React from "react";

let apiKey = '11265a95ff4b8e8173241ae6110005b4';
let WeatherDisplay = (props) => {
    return <div>api.openweathermap.org/data/2.5/weather?lat={props.lat}&lon={props.long}&appid={apiKey}</div>
};
export default WeatherDisplay;