import React, { Component } from "react";

import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

class WeatherCall extends Component {
    constructor() {
        super();
        this.state = {
            weatherData: {},
            weatherLocation: '',
            zip: ''    
        }
    }   
  
    componentDidMount() {
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${this.state.weatherData},us&appid=96901f1375395bd16951db545b3c226c`) 
        .then(response => {
            console.log('testing API', response);
            this.setState({
                weatherData: response.data.main
            })
         })
        .catch(err => console.log(err))
    }

    handleChanges = event => {
        this.setState({
            zip: event.target.value
        })
    
    }

    fetchZip = () => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=96901f1375395bd16951db545b3c226c`)
        .then( response => {
            this.setState({
                weatherData: response.data.main,
                weatherLocation: response.data.name 
            })
        })
        .catch(err => console.log(err));
    }
  
    render() {
        // if (this.state.  < 5){
        //     return (
        //         <div>
        //             <h2>Type in your desired zip code</h2>
        //             <input type='text' value={this.state.zip} onChange={this.handleChanges} />
        //             <button onClick={this.fetchZip}>Find Weather</button>
        //         </div>
        //     )
        // }
      return (
        <div>
          <input type='text' value={this.state.zip} onChange={this.handleChanges} />
          <button onClick={this.fetchZip}>Find Weather</button>
          <WeatherDisplay
          data = {this.state.weatherData}
          location={this.state.weatherLocation}
          />
        </div>
      );
    }
  }

export default WeatherCall;