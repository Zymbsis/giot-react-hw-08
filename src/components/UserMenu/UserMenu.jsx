import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/slice';
import css from './UserMenu.module.css';
import { clearContacts } from '../../redux/contacts/slice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={css.userMenu}>
      <p>{`Welcome, ${userName}`}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
          dispatch(clearContacts());
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
