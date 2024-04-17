import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';

import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="main-title">
        Phone<span>book</span>
      </h1>
      <div className="phonebook-wrapper">
        <div className="form-and-filter-wrapper">
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
