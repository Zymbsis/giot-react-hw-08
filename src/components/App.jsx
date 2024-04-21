import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RegisteredRoute from './RegisteredRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsUserRefreshing } from '../redux/auth/slice';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isUserRefreshing = useSelector(selectIsUserRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isUserRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RegisteredRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RegisteredRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Layout>
  );
};

export default App;
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from '../redux/contacts/operations';

// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import ContactList from './ContactList/ContactList';
// import './App.css';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className="container">
//       <h1 className="main-title">
//         Phone<span>book</span>
//       </h1>
//       <div className="phonebook-wrapper">
//         <div className="form-and-filter-wrapper">
//           <ContactForm />
//           <SearchBox />
//         </div>
//         <ContactList />
//       </div>
//     </div>
//   );
// }

// export default App;
