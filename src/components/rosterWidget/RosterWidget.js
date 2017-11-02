import React from 'react';
import { connect } from 'react-redux';
import RosterWidgetUI from './RosterWidgetUI';
import { getRoster } from '../../selectors/team';

function mapStateToProps(state, props) {
    return {
        roster: getRoster(state)
    };
};

const RosterWidgetContainer = connect(
    mapStateToProps
)(RosterWidgetUI);

export default RosterWidgetContainer;