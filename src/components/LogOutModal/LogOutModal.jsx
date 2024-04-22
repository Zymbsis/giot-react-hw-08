import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './LogOutModal.module.css';

const LogOutModal = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.logoutModal}>
      <p>Are you sure you want to log out?</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout('LogOutModal'));
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOutModal;
