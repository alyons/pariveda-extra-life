import { combineReducers } from 'redux';
import team from './team';
import twitch from './twitch';

const rootReducer = combineReducers({
    team,
    twitch
});

export default rootReducer;
