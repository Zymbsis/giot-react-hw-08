import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import css from './LogOutModal.module.css';
import { modalClose } from '../../redux/modal/slice';
import { selectAuthLoading } from '../../redux/auth/slice';
import Loader from '../Loader/Loader';

const LogOutModal = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const handleDelete = () => {
    dispatch(logout());
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };
  return (
    <>
      {authLoading ? (
        <Loader />
      ) : (
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
      )}
      return
    </>
  );
};

export default LogOutModal;
