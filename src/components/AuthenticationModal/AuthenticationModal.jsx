import { useDispatch } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import css from './AuthenticationModal.module.css';
import { modalClose } from '../../redux/modal/slice';

const AuthenticationModal = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(modalClose());
  };
  return (
    <div className={css.authModal}>
      <p>To access the application, please register or log in.</p>
      <AuthNav onClick={handleClick} />
    </div>
  );
};

export default AuthenticationModal;
