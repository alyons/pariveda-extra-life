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
  componentWillMount() {
    // const teamID = this.queryParams.teamID;
    // if (teamID) {
    this.props.fetchTeamInfo(33379);
    // }
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