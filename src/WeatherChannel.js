import React, {Component} from 'react';
import axios from 'axios';
import CityCondition from './CityCondition';
import Forecast from './Forecast';

import {fetchConditionData, fetchForecast} from './weather';

export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curCity: 'melbourne',
            conditionData: {               
                //city: '',
               // weather: 'sunny',
                //temp: 29
            },
            forecast: [                
                //{weekday:'Tue', icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif', high:30, low: 15},
               // {weekday:'Wed', icon: 'http://icons.wxug.com/i/c/k/clear.gif', high:29, low: 15},
                //{weekday:'Thu', icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif', high:28, low: 15}
            ]
        }
        //this.handleOnChange = this.handleOnChange.bind(this);
        //this.handleOnClick = this.handleOnClick.bind(this);
        this.handleConditionData = this.handleConditionData.bind(this);
        this.handleForestCastData = this.handleForestCastData.bind(this);
    }

    onSubmit() {
        //alert('clicked');
        fetchConditionData(this.state.curCity)
        .then(this.handleConditionData);
        fetchForecast(this.state.curCity)
        .then(this.handleForecastData)     
    }

    handleConditionData(data) {
       console.log('got data from api:', data);
       const conditionData = {
           city: data.current_observation.display_location.full,
           weather: data.current_observation.weather,
           temp: data.current_observation.temp_c,
           desc: data.forecast.txt_forecast.forecastday[0].fcttext  
 //forecast.simpleforecast.forecastday[0].fcttext           
       }
       this.setState({conditionData});
    }

    handleForestCastData(data1){
        let forecastData = [];
        console.log('got forecast from api:', data1);
        for(let i=0; i<5; i++){
           forecastData[i] = {weekday: data1[i].date.weekday, icon: data1[i].icon_url, high: data1[i].high.celsius, low: data1[i].low.celsius}
        }
        //onst forecastData = [
        //    {weekday: data1[0].date.weekday, icon: data1[0].icon_url, high: data1[0].high.celsius, low: data1[0].low.celsius},
        //    {weekday: data1[1].date.weekday, icon: data1[1].icon_url, high: data1[1].high.celsius, low: data1[1].low.celsius},
        //    {weekday: data1[2].date.weekday, icon: data1[2].icon_url, high: data1[2].high.celsius, low: data1[2].low.celsius},
       // ]
        console.log(forecastData);
        this.setState({forecast:forecastData});

    }
    
    componentDidMount() {
        fetchConditionData(this.state.curCity).then(this.handleConditionData);
        //fetchConditionData(this.state.curCity, (data) => this.handleConditionData(data))
        fetchForecast(this.state.curCity).then(this.handleForestCastData);
       
    }

    render() {
        const {city, weather, temp, desc} = this.state.conditionData;
        const forecast = this.state.forecast;
        return (
            <main>
                <nav style={{padding:10}}>
                    <input value={this.state.curCity} 
                        onChange={(e) => this.setState({curCity:e.target.value})} />
                    <button onClick={() => {this.onSubmit() } }>Load</button>
                </nav>
                <section id="left">  
                    <CityCondition 
                        city={city}
                        weather={weather}
                        temp={temp}
                        desc={desc}
                    />
                </section>  
                <section id="right">    
                    <Forecast 
                        forecast={forecast}
                    />
                </section>    
            </main>   
        )
    }
}