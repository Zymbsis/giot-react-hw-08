import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/selectors';

import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  return (
    <nav>
      <NavLink className={css} to="/">
        Home
      </NavLink>
      {isUserLoggedIn && (
        <NavLink className={css} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
