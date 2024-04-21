import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/selectors';

const HomePage = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  return (
    <section className="section">
      <div className={`${css.container} container`}>
        <Link
          className={css.mainTitle}
          to={isUserLoggedIn ? '/contacts' : '/login'}
        >
          PhoneBook
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
