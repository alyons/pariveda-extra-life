import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import { DonationWidget } from './components/donationWidget';
import { TwitchWidget } from './components/twitchWidget';

const DonationWidgetComponent = DonationWidget.Container;
const TwitchWidgetComponent = TwitchWidget.Container;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Extra Life!</h1>
        </header>
        <TwitchWidgetComponent />
        <DonationWidgetComponent />
        <Display />
      </div>
    );
  }
}

export default App;
