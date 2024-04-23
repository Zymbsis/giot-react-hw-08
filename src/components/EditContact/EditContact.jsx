import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../redux/modal/slice';
import css from './EditContact.module.css';
import { updateContact } from '../../redux/contacts/operations';
import { selectContact } from '../../redux/contacts/slice';

const EditContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);
  const credentials = { name: contact.name, number: contact.number };
  const handleEdit = () => {
    dispatch(
      updateContact({
        id: contact.id,
        credentials: credentials,
      })
    );
  };

  const handleCancel = () => {
    dispatch(modalClose());
  };
  const handleChangeName = e => {
    credentials.name = e.target.value;
    console.log(credentials);
  };
  const handleChangeNumber = e => {
    credentials.number = e.target.value;
  };
  return (
    <div className={css.editModal}>
      <div className={css.searchForm}>
        <input
          type="name"
          name="name"
          value={credentials.name}
          onChange={handleChangeName}
        />
        <input
          type="text"
          name="number"
          value={credentials.number}
          onChange={handleChangeNumber}
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
