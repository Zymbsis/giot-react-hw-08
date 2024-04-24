import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
