import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import { DonationWidget } from './components/donationWidget';

const DonationWidgetComponent = DonationWidget.Container;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Extra Life!</h1>
        </header>
        <DonationWidgetComponent />
        <Display />
      </div>
    );
  }
}

export default App;
