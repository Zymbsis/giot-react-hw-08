import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './LogOutModal.module.css';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={css.logoutModal}>
      <p>Are you sure you want to log out?</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default LogOutModal;
