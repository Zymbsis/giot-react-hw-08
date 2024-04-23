import { useDispatch } from 'react-redux';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { modalOpen } from '../../redux/modal/slice';

import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      modalOpen({
        actionType: 'DeleteModal',
        actionData: id,
      })
    );
  };
  const handleEdit = () => {
    dispatch(
      modalOpen({
        actionType: 'EditModal',
        actionData: id,
      })
    );
  };
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
      <div className={css.buttonWrapper}>
        <button className={css.button} type="button" onClick={handleEdit}>
          <CiEdit className={css.icon} />
        </button>
        <button className={css.button} type="button" onClick={handleDelete}>
          <MdOutlineDeleteForever className={css.icon} />
        </button>
      </div>
    </>
  );
};
export default Contact;
