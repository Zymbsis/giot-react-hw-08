import { useDispatch, useSelector } from 'react-redux';
import css from './DeleteContact.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { selectActionData } from '../../redux/modal/slice';

const DeleteContact = () => {
  const dispatch = useDispatch();
  const contactId = useSelector(selectActionData);
  const handleClick = () => {
    dispatch(deleteContact(contactId));
  };
  
  return (
    <div className={css.deleteModal}>
      <p>Are you sure you want to delete this contact?</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default DeleteContact;
