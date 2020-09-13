import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
//import {orderReducer} from '../Reducers/orderReducer';
import thunk from 'redux-thunk';
import { loginReducer } from '../Reducers/loginReducer';

const initialState = {};

const reducer = combineReducers({
     // orderDetails: orderReducer,
      loginDetails:loginReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(  reducer,  initialState,  composeEnhancer(applyMiddleware(thunk)),);

export default Store;
