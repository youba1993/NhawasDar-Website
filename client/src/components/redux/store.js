import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import AuthReducer from './reducers/AuthReducer';
import HouseReducer from './reducers/HouseReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = combineReducers({
    house: HouseReducer,
    auth: AuthReducer
})

const store = createStore(rootStore, composeEnhancers(applyMiddleware(thunk)))
export default store;
