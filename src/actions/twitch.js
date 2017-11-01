import { TWITCH_CHANNEL_REQUEST, TWITCH_CHANNEL_SUCCESS, TWITCH_CHANNEL_FAILURE } from './actionTypes';

export function getTwitchChannelRequest() {
    return { type: TWITCH_CHANNEL_REQUEST };
}

export function getTwitchChannelSuccess(payload) {
    return {
        type: TWITCH_CHANNEL_SUCCESS,
        payload
    };
}

export function getTwitchChannelFailure(payload) {
    return {
        type: TWITCH_CHANNEL_FAILURE,
        payload
    };
}

export function getTwitchChannel(channelName) {
    const url = 'https://api.twitch.tv/kraken/users?login=' + channelName;
    const opts = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'mo2zyz8fwx0rpcdhve83nql5ymzmsa'
        }
    };
    return dispatch => {
        dispatch(getTwitchChannelRequest());
        return fetch(url, opts)
            .then(res => res.json())
            .then(body => dispatch(getTwitchChannelSuccess(body)))
            .catch(err => dispatch(getTwitchChannelFailure(err)));
    };
}