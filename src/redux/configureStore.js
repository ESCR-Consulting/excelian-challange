import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import users from './modules/users';
import responsiveDrawer from './modules/responsiveDrawer';

const loggerMiddleware = createLogger(); // initialise logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
    users,
    responsiveDrawer,
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;
