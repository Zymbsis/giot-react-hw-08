import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/slice';
import css from './HomePage.module.css';
import { modalOpen } from '../../redux/modal/slice';

const HomePage = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const dispatch = useDispatch();
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
