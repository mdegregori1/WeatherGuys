import React, { useState, useEffect, Component } from "react";

import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

import {useCustomHook} from '../hooks/useCustomHook'

const WeatherCall = () => {
    const [weatherData, setWeatherData] = useState({});
    const [weatherLocation, setWeatherLocation] = useState('');
    const [zip, setZip] = useState('')

 
    
    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${zip}us&appid=96901f1375395bd16951db545b3c226c`) 
        .then(response => {
            console.log('testing API', response);
            setWeatherData(response.data.main)
         })
        .catch(err => console.log(err))
      }, [weatherData]);

    const handleChanges = event => {
        setZip(event.target.value)
 
    }
    const fetchZip = (e) => {
        e.preventDefault();
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=96901f1375395bd16951db545b3c226c`)
        .then( response => {
            setWeatherData(response.data.main)
            setWeatherLocation(response.data.name)
        })
        .catch(err => console.log(err));
    }

      return (
        <div>
            <form onSubmit={fetchZip}>
                <div>
                    <input type='text' value={zip} onChange={handleChanges} />
                    <button type="submit">Find Weather</button>  
                </div>
            </form>
          <WeatherDisplay
          data = {weatherData}
          location={weatherLocation}
          />
        </div>
      );
  }

export default WeatherCall; 