import { assign } from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
    totalRaisedAmount:0,
    fundraisingGoal:0,
    createdOn:'',
    timestamp:0,
    avatarImageURL:'',
    teamID:0,
    name:''
};

export default function teamReducer(state = initialState, action) {
    const newState = assign({}, state);
    const team = {...newState.team};
    switch (action.type) {
        case types.GET_TEAM_INFO_SUCCESS: {
            return assign({}, newState, action.payload);
        }
        default: {
            return state;
        }
    }
};