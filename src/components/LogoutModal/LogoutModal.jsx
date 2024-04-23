import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { modalClose } from '../../redux/modal/slice';

import css from './LogoutModal.module.css';

const LogoutModal = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(logout());
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };

  return (
    <>
      <>
        <p className={css.logoutTitle}>Are you sure you want to log out?</p>
        <div className={css.buttonWrapper}>
          <button type="button" onClick={handleDelete}>
            Log Out
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </>
    </>
  );
};

export default LogoutModal;
