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

    const resp = await fetchWithoutToken( 'api/login', { email, password }, 'POST' );
    const body = await resp.json();

    if (!body.ok) return erroConnection()

    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime() );
    dispatch( login({
      uid: body.user.uuid,
      username: body.user.username,
      email: body.user.email,
      token: body.token
    }) )
  }
}

export const startRegister = ( email, password, name ) => {
  return async( dispatch ) => {

    const resp = await fetchWithoutToken( 'api/register', { email, password, username: name }, 'POST' );
    const body = await resp.json();

    if (!body.ok) return erroConnection()

    localStorage.setItem('token', body.token );
    localStorage.setItem('token-init-date', new Date().getTime() );

    dispatch( login({
      uid: body.user.uuid,
      username: body.user.username,
      email: body.user.email,
      token: body.token
    }) )

  }
}

export const startChecking = () => {
  return async(dispatch) => {
    try {
      const resp = await fetchWithToken('api/refresh-token', null );
      const body = await resp.json();

      if (!body.ok) return dispatch( checkingFinish() );

      localStorage.setItem('token', body.token );
      localStorage.setItem('token-init-date', new Date().getTime() );

      dispatch( login({
        uid: body.user.uuid,
        username: body.user.username,
        email: body.user.email,
        token: body.token
      }) )
    } catch (e) {
      dispatch( checkingFinish() )
    }

  }
}

export const startLogout = () => {
  return ( dispatch ) => {
    localStorage.clear();
    // dispatch( eventLogout() );
    dispatch( logout() );
  }
}
