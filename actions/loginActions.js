import {LOGIN_FAIL, LOGIN_REQ, LOGIN_SUCCESS} from './Constants';

export const loginAction = (values) => (dispatch) => {
  try {

    var form = new FormData();
    form.append('driver_id', values.driver_id);
    form.append('password', values.password);
       fetch('http://qrweb.co/ecommerce/public/api/driverlogin', {
        method: 'POST',
         headers: new Headers({
        'Content-Type': 'multipart/form-data',
       }),
        body: form,
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: LOGIN_SUCCESS, payload:data});
      });
  } catch (error) {
    dispatch({type: LOGIN_FAIL, payload:data});

  }
};
