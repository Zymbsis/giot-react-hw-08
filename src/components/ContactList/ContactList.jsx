import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';
import Loader from '../Loader/Loader';
import css from './ContactList.module.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
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
      {error !== null && <ErrorMessage />}
    </div>
  );
};

export default ContactList;
