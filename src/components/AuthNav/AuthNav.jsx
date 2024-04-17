import { NavLink, Outlet } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css} to="/register">
        Register
      </NavLink>
      <NavLink className={css} to="/login">
        Log In
      </NavLink>
      <Outlet />
    </div>
  );
};

export default AuthNav;
