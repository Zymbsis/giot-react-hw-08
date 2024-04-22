import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { selectIsUserLoggedIn } from '../../redux/auth/slice';

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

const AppBar = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

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
