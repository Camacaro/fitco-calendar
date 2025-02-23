import { useSelector, useDispatch } from 'react-redux'
import {startLogout} from "../actions/auth.js";

export const Navbar = () => {

  const dispatch = useDispatch();
  const { username } = useSelector( state => state.auth );

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <div className="navbar" style={{backgroundColor: '#1a252f'}}>
            <span className="navbar-brand" style={{color: 'white'}}>
                { username }
            </span>

      <button
        className="btn btn-outline-danger"
        onClick={ handleLogout }
      >
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>

    </div>
  )
}
