import axios from 'axios';
const CONDITION_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/forecast/q/Australia/';
const FORECAST_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';

export function fetchConditionData(city) {
    return axios.get(CONDITION_BASE_URL + `${city}` + '.json').then(resp => resp.data)
    
    //.then(this.)
    // .then(this.handleConditionData);
    // conditionXHR.open('GET', `${CONDITION_BASE_URL}${city}.json`);
    // conditionXHR.send();
    // conditionXHR.onload = () => {
    //     if (conditionXHR.status === 200){
        
    //         const dataObj = JSON.parse(conditionXHR.responseText);
    //         onLoad(dataObj)
    //     } else {

    //     }
    // }
}


export function fetchForecast(city) {
    return axios.get(FORECAST_BASE_URL + `${city}` + '.json').then(resp => resp.data.forecast.simpleforecast.forecastday)
    // forecastXHR.open('GET', `${FORECAST_BASE_URL}${city}.json`);
    // forecastXHR.send();
    // forecastXHR.onload = () => {
    //     if (forecastXHR.status === 200){
    //         const forecastObj = JSON.parse(forecastXHR.responseText);
    //         console.log(forecastObj)
    //         onLoad(forecastObj.forecast.simpleforecast.forecastday)
    //     }else {

    //     }
    // }

}