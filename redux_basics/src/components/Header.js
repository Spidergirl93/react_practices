import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import classes from './Header.module.css';

const Header = () => {


  const isLoggedIn = useSelector(state => state.auth.loggedIn);

  const dispatch = useDispatch();

  const logoutHandler = event => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
