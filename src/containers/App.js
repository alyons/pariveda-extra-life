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
    'BarclayWalsh',
    'halfchickenhalfsteak',
    'Liandrielle',
    'kathleenlepirate',
    'mdrewett',
    'oryo_casade',
    'pariveda_la_office',
    'pariveda_sea',
    'pyroticblaziken',
    'rookienthevet',
    'Skulcat',
    'vtor67',
    'zakodiac',
    'zephsinx'
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