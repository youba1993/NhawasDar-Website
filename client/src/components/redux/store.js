import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import AuthReducer from './reducers/AuthReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store = createStore(AuthReducer, composeEnhancers(applyMiddleware(thunk)))
export default store;
