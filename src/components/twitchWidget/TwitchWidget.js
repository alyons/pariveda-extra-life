import React from 'react';
import { connect } from 'react-redux';
import TwitchWidgetUI from './TwitchWidgetUI';
import * as TwitchActions from '../../actions/twitch';
import { getUsers, getStreams } from '../../selectors/twitch';

function mapStateToProps(state, props) {
    return {
        users: getUsers(state),
        getStreams: getStreams(state)
    };
};

function mapDispatchToProps(dispatch) {
    const twitchAccounts = [
        'pariveda',
        'pyroticblaziken',
        'halfchickenhalfsteak',
        'zakodiac',
        'arfreitas12',
        'vtor67',
        'kathleenlepirate',
        'mdrewett',
        'zephsinx'
    ];

    return {
        getTwitchData: () => dispatch(TwitchActions.getTwitchUsers(twitchAccounts))
    };
};

const TwitchWidgetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TwitchWidgetUI);

export default TwitchWidgetContainer;