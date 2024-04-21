import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/slice';

import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

export const Navigation = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  // const isUserLoggedIn = true;

  return (
    <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      {isUserLoggedIn && (
        <NavLink className={getNavLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
