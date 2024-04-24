import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../redux/auth/selectors';

import Loader from '../components/Loader/Loader';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  return (
    <section className="section">
      <div className="container">
        {authLoading ? <Loader /> : <RegistrationForm />}
      </div>
    </section>
  );
};

export default RegistrationPage;
