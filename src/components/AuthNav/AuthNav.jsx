import { NavLink, Outlet } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const AuthNav = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login">
        Log In
      </NavLink>
      <Outlet />
    </nav>
  );
};

export default AuthNav;
