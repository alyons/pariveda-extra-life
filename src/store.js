import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import middlewareUtil from './middlewareUtil';

export default function configureStore(preloadedState) {
    const reduxDevTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    const composeEnhancers = reduxDevTools ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'Extra Life Team Monitor'
        }) : compose;
    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            middlewareUtil
        )
    );

    return store;
}