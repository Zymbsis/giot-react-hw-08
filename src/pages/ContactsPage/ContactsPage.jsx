import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactsPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={css.phonebookWrapper}>
        <div className={css.formAndFilterWrapper}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
