import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../../redux/auth/selectors';

import { Navigation } from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

const AppBar = () => {
  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const isUserLoggedIn = true;

  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
        <Navigation />
        {isUserLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
