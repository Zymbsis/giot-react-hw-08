import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectContact } from '../../redux/contacts/selectors';
import { modalClose } from '../../redux/modal/slice';
import css from './DeleteContact.module.css';

const DeleteContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };

  return (
    <>
      <p className={css.deleteTitle}>
        Are you sure you want to delete this contact?
      </p>
      <p className={css.deleteTitle}>{contact.name}</p>
      <div className={css.buttonWrapper}>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default DeleteContact;
