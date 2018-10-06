import { getTeamInfo, getTeamRoster } from '../actions/team';
import { SET_TEAM_ID, GET_TEAM_INFO_SUCCESS } from '../actions/actionTypes';
import { getId } from '../selectors/team';

const actionWhiteList = [SET_TEAM_ID, GET_TEAM_INFO_SUCCESS];

const actionInWhiteList = action => actionWhiteList.includes(action.type);

export const teamMiddleware = store => next => (action) => {
    next(action);

    const state = store.getState();

    if (actionInWhiteList(action)) {
        switch (action.type) {
            case SET_TEAM_ID: {
                store.dispatch(getTeamInfo(action.payload));                
                break;
            }
            case GET_TEAM_INFO_SUCCESS: {
                store.dispatch(getTeamRoster(getId(state)));
                break;
            }
            default: {
                break;
            }
        }
    }
};

export default { teamMiddleware };