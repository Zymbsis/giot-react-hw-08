import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { modalClose } from '../../redux/modal/slice';
import css from './DeleteContact.module.css';
import { selectContact } from '../../redux/contacts/slice';

const DeleteContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  const handleDelete = () => {
    console.log(contact[0].id, contact[0].name);

    dispatch(deleteContact(contact[0].id));
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };

  return (
    <div className={css.deleteModal}>
      <p>Are you sure you want to delete this contact?</p>
      <p>{contact[0].name}</p>
      <div className={css.buttonWrapper}>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteContact;
