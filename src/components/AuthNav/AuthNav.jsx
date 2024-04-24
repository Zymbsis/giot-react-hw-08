import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { modalClose } from '../../redux/modal/slice';
import { selectIsOpen } from '../../redux/modal/selectors';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const AuthNav = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsOpen);

  const handleClick = () => {
    isModalOpen && dispatch(modalClose());
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/register" onClick={handleClick}>
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login" onClick={handleClick}>
        Log In
      </NavLink>
    </nav>
  );
};

export default AuthNav;
