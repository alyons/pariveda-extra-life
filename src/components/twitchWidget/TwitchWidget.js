import React from 'react';
import { connect } from 'react-redux';
import TwitchWidgetUI from './TwitchWidgetUI';
import * as TwitchActions from '../../actions/twitch';

function mapStateToProps(state, props) {
    return {

    };
};

function mapDispatchToProps(dispatch) {
    return {
        getTwitchData: () => dispatch(TwitchActions.getTwitchChannel('pyroticblaziken'))
    };
};

const TwitchWidgetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TwitchWidgetUI);

export default TwitchWidgetContainer;