import { TWITCH_STREAMS_REQUEST,
         TWITCH_STREAMS_SUCCESS,
         TWITCH_STREAMS_FAILURE,
         TWITCH_USERS_REQUEST,
         TWITCH_USERS_SUCCESS,
         TWITCH_USERS_FAILURE } from './actionTypes';

export function getTwitchUsersRequest() {
    return { type: TWITCH_USERS_REQUEST };
};

export function getTwitchUsersSuccess(payload) {
    return {
        type: TWITCH_USERS_SUCCESS,
        payload
    };
};

export function getTwitchUsersFailure(payload) {
    return {
        type: TWITCH_USERS_FAILURE,
        payload
    };
};

export function getTwitchUsers(userNames) {
    var url = 'https://api.twitch.tv/kraken/users?login=';
    for (var i = 0; i < userNames.length; i++) {
        url += userNames[i];
        if (i < userNames.length - 1)
            url += ','
    }
    const opts = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'mo2zyz8fwx0rpcdhve83nql5ymzmsa'
        }
    };
    return dispatch => {
        dispatch(getTwitchUsersRequest);
        return fetch(url, opts)
            .then(res => res.json())
            .then(body => dispatch(getTwitchUsersSuccess(body)))
            .catch(err => dispatch(getTwitchUsersFailure(err)));
    };
};

export function getTwitchStreamsRequest() {
    return { type: TWITCH_STREAMS_REQUEST };
};

export function getTwitchStreamsSuccess(payload) {
    return {
        type: TWITCH_STREAMS_SUCCESS,
        payload
    };
};

export function getTwitchStreamsFailure(payload) {
    return {
        type: TWITCH_STREAMS_FAILURE,
        payload
    };
};

export function getTwitchStreams(channelIds) {
    var url = 'https://api.twitch.tv/kraken/streams?channel=';
    for (var i = 0; i < channelIds.length; i++) {
        url += channelIds[i];
        if (i < channelIds.length - 1)
            url += ','
    }
    const opts = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': 'mo2zyz8fwx0rpcdhve83nql5ymzmsa'
        }
    };
    return dispatch => {
        dispatch(getTwitchStreamsRequest);
        return fetch(url, opts)
            .then(res => res.json())
            .then(body => dispatch(getTwitchStreamsSuccess(body)))
            .catch(err => dispatch(getTwitchStreamsFailure(err)));
    };
};