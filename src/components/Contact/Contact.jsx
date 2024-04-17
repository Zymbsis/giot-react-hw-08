import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contact}>
        <FaUser className={css.contactIcon} />
        <h2 className={css.name}>{name}</h2>
      </div>
      <div className={css.contact}>
        <FaPhone className={css.contactIcon} />
        <p className={css.number}>{number}</p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </>
  );
};
export default Contact;
