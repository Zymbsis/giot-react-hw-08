import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../redux/modal/slice';
import css from './EditContact.module.css';
import { updateContact } from '../../redux/contacts/operations';
import { selectContact } from '../../redux/contacts/slice';

const EditContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  const handleEdit = () => {
    dispatch(
      updateContact({
        id: contact.id,
        credentials: { name: contact.name, number: contact.number },
      })
    );
  };

  const handleCancel = () => {
    dispatch(modalClose());
  };
  const handleChange = e => {
    console.log(contact);
  };
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
          type="text"
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
