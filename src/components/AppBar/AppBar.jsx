import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

const AppBar = () => {
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

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
