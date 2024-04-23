import AuthNav from '../AuthNav/AuthNav';
import css from './AuthenticationModal.module.css';

const AuthenticationModal = () => {
  return (
    <>
      <p className={css.authTitle}>
        To access the application, please register or log in.
      </p>
      <AuthNav />
    </>
  );
};

export default AuthenticationModal;
