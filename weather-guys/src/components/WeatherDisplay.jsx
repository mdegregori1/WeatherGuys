import React from "react";

const WeatherDisplay = (props) => {
    console.log('Weather Display Props: ', props)   
    const convertFahrenheit = () => {
        const convertedTemp = Math.round(((`${props.data.temp}` - 273.15) * 9/5 + 32))
        return convertedTemp;
    }
    const callConversion= convertFahrenheit();
   
    return (
        <div>
            <h2>{props.location}</h2>
            <p>Humidity: {props.data.humidity}%</p>
            <p> Temperature: {callConversion}F</p>
        </div>
    )
}

export default WeatherDisplay;

