import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';
import Loader from '../Loader/Loader';

import css from './ContactList.module.css';

const ContactList = () => {
  const contactLoading = useSelector(selectLoading);
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
      {contactLoading && <Loader />}
    </div>
  );
};

export default ContactList;
