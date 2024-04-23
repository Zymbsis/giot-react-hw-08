import { useDispatch, useSelector } from 'react-redux';
import { modalClose, selectActionData } from '../../redux/modal/slice';
import css from './EditContact.module.css';
import { updateContact } from '../../redux/contacts/operations';

const EditContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectActionData);

  const handleEdit = () => {
    dispatch(updateContact(contact.id));
  };

  const handleCancel = () => {
    dispatch(modalClose());
  };
  const handleChange = e => {};
  return (
    <div className={css.editModal}>
      <div className={css.searchForm}>
        <input
          type="name"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          value={contact.number}
          // onChange={handleChange}
        />
      </div>
      <div className={css.buttonWrapper}>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditContact;