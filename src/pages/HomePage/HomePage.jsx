import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/slice';
import css from './HomePage.module.css';

const HomePage = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  return (
    <section className="section">
      <div className={`${css.container} container`}>
        <Link
          className={css.phoneBookLink}
          to={isUserLoggedIn ? '/contacts' : '/login'}
        >
          PhoneBook
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
