import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RegisteredRoute from './RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import {
  selectIsUserLoggedIn,
  selectIsUserRefreshing,
} from '../redux/auth/slice';
import RestrictedRoute from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isUserRefreshing = useSelector(selectIsUserRefreshing);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
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
              isUserLoggedIn ? (
                <Navigate to="/contacts" />
              ) : (
                <RegistrationPage />
              )
              // <RestrictedRoute
              //   redirectTo="/contacts"
              //   component={<RegistrationPage />}
              // />
            }
          />
          <Route
            path="/login"
            element={
              isUserLoggedIn ? <Navigate to="/contacts" /> : <LoginPage />
              // <RestrictedRoute
              //   redirectTo="/contacts"
              //   component={<LoginPage />}
              // />
            }
          />
          <Route
            path="/contacts"
            element={
              isUserLoggedIn ? <ContactsPage /> : <Navigate to="/login" />
              // <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
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
