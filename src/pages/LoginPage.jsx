import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../redux/auth/selectors';

import Loader from '../components/Loader/Loader';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  return (
    <section className="section">
      <div className="container">
        {authLoading ? <Loader /> : <LoginForm />}
      </div>
    </section>
  );
};

export default LoginPage;
