import { assign } from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
    users: [
    ]
};

export default function twitchReducer(state = initialState, action) {
    const newState = assign({}, state);
    switch (action.type) {
        case types.TWITCH_CHANNEL_SUCCESS: {
            console.log(action.payload);
            return assign({}, newState, action.payload);
        }
        case types.TWITCH_CHANNEL_FAILURE: {
            console.log(action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};
