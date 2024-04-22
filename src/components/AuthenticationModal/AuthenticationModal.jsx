import AuthNav from '../AuthNav/AuthNav';
import css from './AuthenticationModal.module.css';

const AuthenticationModal = () => {
  return (
    <div className={css.authModal}>
      <p>To access the application, please register or log in.</p>
      <AuthNav />
    </div>
  );
};

export default AuthenticationModal;
