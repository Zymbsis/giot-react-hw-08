import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsUserRefreshing } from '../redux/auth/slice';
import RestrictedRoute from './RestrictedRoute';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isUserRefreshing = useSelector(selectIsUserRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isUserRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
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
