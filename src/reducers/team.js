import { assign } from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
    totalRaisedAmount:0,
    fundraisingGoal:0,
    createdOn:'',
    timestamp:0,
    avatarImageURL:'',
    teamID:0,
    name:'',
    roster: []
};

export default function teamReducer(state = initialState, action) {
    const newState = assign({}, state);
    switch (action.type) {
        case types.GET_TEAM_INFO_SUCCESS: {
            return assign({}, newState, action.payload);
        }
        case types.GET_TEAM_INFO_FAILURE: {
            console.log(action.payload);
            return state;
        }
        case types.GET_TEAM_ROSTER_SUCCESS: {
            newState.roster = action.payload;
            return newState;
        }
        case types.GET_TEAM_ROSTER_FAILURE: {
            console.log(action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};
