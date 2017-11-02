import { includes } from 'lodash';
import { getTwitchStreams } from '../actions/twitch';
import { TWITCH_USERS_SUCCESS } from '../actions/actionTypes';
import { getUsers } from '../selectors/twitch';

const actionWhiteList = [TWITCH_USERS_SUCCESS];

const actionInWhiteList = action => includes(actionWhiteList, action.type);

export const twitchMiddleware = store => next => (action) => {
    next(action);

    const state = store.getState();

    if (actionInWhiteList(action)) {
        switch (action.type) {
            case TWITCH_USERS_SUCCESS: {
                const channelIds = getUsers(state).map(a => a._id);
                store.dispatch(getTwitchStreams(channelIds));
                break;
            }
            default: {
                break;
            }
        }
    }
};

export default { twitchMiddleware };