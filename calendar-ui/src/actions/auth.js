import Swal from 'sweetalert2';

import {login, checkingFinish, logout} from "../reducers/authReducer.js";
import {fetchWithoutToken, fetchWithToken} from "../services/http.js";

const erroConnection = () => {
  Swal.fire({
    title: 'Error',
    text: 'Error de conexión',
    icon: 'error'
  });
  return
}

export const startLogin = ( email, password ) => {
  return async( dispatch ) => {

    const resp = await fetchWithoutToken( 'auth', { email, password }, 'POST' );
    const body = await resp.json();

    if (!body.ok) return erroConnection()

    localStorage.setItem('token', "body.token" );
    localStorage.setItem('token-init-date', new Date().getTime() );
    dispatch( login({
      uid: '123',
      username: 'jcamcacaro',
      email: 'jesus@gmail.com',
      token: 'token'
    }) )
  }
}

export const startRegister = ( email, password, name ) => {
  return async( dispatch ) => {

    const resp = await fetchWithoutToken( 'auth/new', { email, password, name }, 'POST' );
    const body = await resp.json();

    if (!body.ok) return erroConnection()

    localStorage.setItem('token', body.token );
    localStorage.setItem('token-init-date', new Date().getTime() );

    dispatch( login({
      uid: '123',
      username: 'jcamcacaro',
      email: 'jesus@gmail.com',
      token: 'token'
    }) )

  }
}

export const startChecking = () => {
  return async(dispatch) => {

    const resp = await fetchWithToken('auth/renew', null );
    const body = await resp.json();

    if (!body.ok) return dispatch( checkingFinish() );

    localStorage.setItem('token', body.token );
    localStorage.setItem('token-init-date', new Date().getTime() );

    dispatch( login({
      uid: '123',
      username: 'jcamcacaro',
      email: 'jesus@gmail.com',
      token: 'token'
    }) )
  }
}

export const startLogout = () => {
  return ( dispatch ) => {
    localStorage.clear();
    // dispatch( eventLogout() );
    dispatch( logout() );
  }
}
