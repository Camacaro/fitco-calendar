import Swal from 'sweetalert2';

import {login} from "../reducers/authReducer.js";

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {
    // TODO: apply fetch data
    if( true ) {
      localStorage.setItem('token', "body.token" );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( login({
        uid: '123',
        username: 'jcamcacaro',
        email: 'jesus@gmail.com',
        token: 'token'
      }) )

    } else {
      Swal.fire({
        title: 'Error',
        text: 'Error de conexión',
        icon: 'error'
      });
    }


  }
}
