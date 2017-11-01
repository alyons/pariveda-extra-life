import { includes } from 'lodash';
import { SET_TEAM_ID } from '../actions/actionTypes';
import { getTeamInfo } from '../actions/team';

const actionWhiteList = [SET_TEAM_ID];

const actionInWhiteList = action => includes(actionWhiteList, action.type);

export const teamMiddleware = store => next => (action) => {
    next(action);

    if (actionInWhiteList(action)) {
        switch (action.type) {
            case SET_TEAM_ID: {
                store.dispatch(getTeamInfo(action.payload));                
            }
            default: {
                break;
            }
        }
    }
};

export default { teamMiddleware };