import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import WeatherChannel from './WeatherChannel';

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Header />
        <WeatherChannel />
        <Footer />
      </div>
    );
  }
}

let loadCityWithError  = () => {
  const executor = (resolve, reject) => {
    const n = Math.round(Math.random());
    setTimeout(() => {
      let result = 'Brisbane';
      if(n === 1)
        resolve(result);
      else
        reject('Fail to load city')
    }, 1000)
  }
  return new Promise(executor)
}

let loadWeatherWithError = (city) => {
  const executor = (resolve, reject) => {
    const n = Math.round(Math.random());
    setTimeout(() => {
      let result = {temp: 10};
      if(n === 1) 
        console.log(`loadWeather done for ${city}`);
      else
        reject(`Fail to load weather for ${city}`);
      
    }, 1000)
  }
  return new Promise(executor)
}

export default App;
