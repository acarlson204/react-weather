import React from "react";
import axios from "axios";

export default function Weather() {
    function handleResponse(response) {
        alert(`The weather in Winnipeg is ${response.data.main.temp}`)
    };

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=winnipeg&appid=03ea91762285df0d5fb999b760075dea&units=metric`

    axios.get(apiUrl).then(handleResponse);
    return (
        <h1>
            Weather-hello
        </h1>
    )
}