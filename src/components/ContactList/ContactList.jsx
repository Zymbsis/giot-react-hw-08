import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/slice';

import Contact from '../Contact/Contact';
import Loader from '../Loader/Loader';

import css from './ContactList.module.css';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactsWrapper}>
      {visibleContacts.length > 0 && (
        <ul className={css.list}>
          {visibleContacts.map(contact => {
            return (
              <li key={contact.id}>
                <Contact contact={contact}></Contact>
              </li>
            );
          })}
        </ul>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default ContactList;
