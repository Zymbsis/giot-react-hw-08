import { NavLink, Outlet } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { modalClose } from '../../redux/modal/slice';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const AuthNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(modalClose());
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/register" onClick={handleClick}>
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login" onClick={handleClick}>
        Log In
      </NavLink>
      <Outlet />
    </nav>
  );
};

export default AuthNav;
