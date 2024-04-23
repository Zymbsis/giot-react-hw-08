import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsUserLoggedIn } from '../../redux/auth/slice';

import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

export const Navigation = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

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
