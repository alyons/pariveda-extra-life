import React from 'react';
import { connect } from 'react-redux';
import AppUI from './AppUI';
import { setTeamId } from '../actions/team';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
  fetchTeamInfo: (teamId) => {
    dispatch(setTeamId(teamId));
  }
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppUI);

export default App;