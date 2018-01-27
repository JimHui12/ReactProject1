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

export default App;
