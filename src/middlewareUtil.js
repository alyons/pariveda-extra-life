// Third Party
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Middleware
import { teamMiddleware } from './middleware/team';

const allMiddleware = applyMiddleware(
    thunk,
    teamMiddleware
);

export default allMiddleware;