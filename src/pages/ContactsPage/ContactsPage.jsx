import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className="container">
      <h1 className={css.mainTitle}>
        Phone<span>book</span>
      </h1>
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
