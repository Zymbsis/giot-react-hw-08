import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/slice';
import { modalOpen } from '../../redux/modal/slice';
import css from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  const handleClick = () => {
    !isUserLoggedIn &&
      dispatch(modalOpen({ actionType: 'AuthenticationModal' }));
  };

  return (
    <section className="section">
      <div className={`${css.container} container`}>
        <Link
          className={css.phoneBookLink}
          to={isUserLoggedIn && '/contacts'}
          onClick={handleClick}
        >
          PhoneBook
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
