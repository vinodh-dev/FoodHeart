import {LOGIN_SUCCESS, LOGIN_REQ, LOGIN_FAIL} from '../actions/Constants';
//import { boolean } from 'yup';

function loginReducer(
  state = {loginData: [], isAuth: false, errorb: ''}, action,) { 

    switch (action.type) {
    case LOGIN_SUCCESS:
      let jsonData = action.payload;
      let extractData = jsonData.data;
      let errorData = action.payload;
      let errorMessage = errorData.message;
      return {loginData: extractData, errorb: errorMessage};
    default:
      return state;
  }
}

export {loginReducer};
