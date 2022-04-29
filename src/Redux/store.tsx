// @ts-nocheck
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk];

// @ts-ignore
const composeEnhancers =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // specify extension's options like name, actionBlacklist, actionCreators, serialize ...
        }) : compose;

const appReducer = combineReducers({
    ...reducers,
});

const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
