// Third Party
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Middleware
import { teamMiddleware } from './middleware/team';
import { twitchMiddleware } from './middleware/twitch';

const allMiddleware = applyMiddleware(
    thunk,
    teamMiddleware,
    twitchMiddleware
);

export default allMiddleware;