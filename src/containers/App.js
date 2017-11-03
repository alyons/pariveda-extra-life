import React from 'react';
import { connect } from 'react-redux';
import AppUI from './AppUI';
import { setTeamId } from '../actions/team';
import * as TwitchActions from '../actions/twitch';

const mapStateToProps = (state) => {
  return {
    timer: null,
    counter: 0
  };
};

function mapDispatchToProps(dispatch) {
  const twitchAccounts = [
    'pariveda',
    'pyroticblaziken',
    'halfchickenhalfsteak',
    'zakodiac',
    'rookienthevet',
    'vtor67',
    'kathleenlepirate',
    'mdrewett',
    'zephsinx',
    'Skulcat'
  ];
  return {
    fetchTeamInfo: (teamId) => {
      dispatch(setTeamId(teamId));
    },
    getTwitchData: () => dispatch(TwitchActions.getTwitchUsers(twitchAccounts))
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI);

export default App;