import * as types from '../actions/actionTypes';

const initialState = {
    users: [
    ],
    streams: [

    ]
};

export default function twitchReducer(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case types.TWITCH_STREAMS_SUCCESS: {
            return Object.assign({}, newState, action.payload);
        }
        case types.TWITCH_STREAMS_FAILURE: {
            console.log(action.payload);
            return state;
        }
        case types.TWITCH_USERS_SUCCESS: {
            return Object.assign({}, newState, action.payload);
        }
        case types.TWITCH_USERS_FAILURE: {
            console.log(action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};
