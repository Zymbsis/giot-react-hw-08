import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { modalOpen } from '../../redux/modal/slice';
import css from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    !isLoggedIn && dispatch(modalOpen({ modalType: 'AuthenticationModal' }));
  };

  return (
    <section className="section">
      <div className={`${css.container} container`}>
        <Link
          className={css.phoneBookLink}
          to={isLoggedIn && '/contacts'}
          onClick={handleClick}
        >
          PhoneBook
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
