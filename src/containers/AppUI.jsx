import React from 'react';
import ReactQueryParams from 'react-query-params';
import './AppUI.css';
import { DonationWidget } from '../components/donationWidget';
import { TwitchWidget } from '../components/twitchWidget';
import { RosterWidget } from '../components/rosterWidget';

const DonationWidgetComponent = DonationWidget.Container;
const TwitchWidgetComponent = TwitchWidget.Container;
const RosterWidgetComponent = RosterWidget.Container;

class AppUI extends ReactQueryParams {

  state = {
    timer: null,
    counter: 0
  };

  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    this.props.fetchTeamInfo(39357);
    this.props.getTwitchData();
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 30000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    this.props.fetchTeamInfo(39357);
    this.props.getTwitchData();
  }
  
  render() {
    return (
      <div className="App">
        <DonationWidgetComponent />
        <TwitchWidgetComponent />
        <RosterWidgetComponent />
      </div>
    );
  }
}

export default AppUI;