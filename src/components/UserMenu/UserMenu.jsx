import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/slice';
import css from './UserMenu.module.css';
import { modalOpen } from '../../redux/modal/slice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const handleClick = () => {
    dispatch(modalOpen({ actionType: 'LogOutModal' }));
  };

  return (
    <div className={css.userMenu}>
      <p>{`Welcome, ${userName}`}</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
