import { Fragment, useContext } from 'react';

import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const {isLoggedIn} = useContext(AuthContext);

  const {logout: logoutHandler} = useContext(AuthContext);

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && 
          <Fragment>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </Fragment>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
