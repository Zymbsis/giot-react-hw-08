import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './LogOutModal.module.css';
import { modalClose } from '../../redux/modal/slice';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout('LogOutModal'));
    dispatch(modalClose());
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
