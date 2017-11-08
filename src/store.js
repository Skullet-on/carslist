import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(
	promisesMiddleware,
	logger)(createStore);

const store = createStoreWithMiddleware(reducer, {
	cars: [],
});

export default store;