const CONDITION_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/forecast/q/Australia/';
const FORECAST_BASE_URL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/';
let onLoadConditionData;
const conditionXHR = new XMLHttpRequest();

conditionXHR.onload = () => {
    if (conditionXHR.status === 200){
        const respData = JSON.parse(conditionXHR.responseText);
        console.log(respData);
        onLoadConditionData(respData)
    } else {
        alert(`Failed to load weather condition: ${conditionXHR.status}`)
    }
}


export function fetchConditionData(city, onLoad) {
    conditionXHR.open('GET', `${CONDITION_BASE_URL}${city}.json`);
    conditionXHR.send();
    conditionXHR.onload = () => {
        if (conditionXHR.status === 200){
        
            const dataObj = JSON.parse(conditionXHR.responseText);
            onLoad(dataObj)
        } else {

        }
    }
}

const forecastXHR = new XMLHttpRequest();

export function fetchForecast(city, onLoad) {
    forecastXHR.open('GET', `${FORECAST_BASE_URL}${city}.json`);
    forecastXHR.send();
    forecastXHR.onload = () => {
        if (forecastXHR.status === 200){
            const forecastObj = JSON.parse(forecastXHR.responseText);
            console.log(forecastObj)
            onLoad(forecastObj.forecast.simpleforecast.forecastday)
        }else {

        }
    }

}