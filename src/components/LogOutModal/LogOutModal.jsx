import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './LogOutModal.module.css';
import { modalClose } from '../../redux/modal/slice';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(logout());
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };
  return (
    <div className={css.logoutModal}>
      <p>Are you sure you want to log out?</p>
      <div className={css.buttonWrapper}>
        <button type="button" onClick={handleDelete}>
          LogOut
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
