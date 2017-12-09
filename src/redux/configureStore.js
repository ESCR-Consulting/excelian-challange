import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form'
import app from './modules/app';

const loggerMiddleware = createLogger(); // initialise logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
    app,
    form: formReducer
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
