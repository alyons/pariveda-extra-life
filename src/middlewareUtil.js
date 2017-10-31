// Third Party
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const allMiddleware = applyMiddleware(
    thunk
);

export default allMiddleware;