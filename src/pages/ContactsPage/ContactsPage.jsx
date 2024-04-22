import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={`${css.section} section`}>
      <div className={`${css.container} container`}>
        <div className={css.formWrapper}>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </section>
  );
};

export default ContactsPage;
