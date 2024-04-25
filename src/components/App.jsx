import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Loader from './Loader/Loader';
import axios from 'axios';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    async function fetchNovaPoshtaData() {
      const params = {
        apiKey: '6e62026c53e899af4a129224065bbe73',
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
          CityName: 'київ',
          Limit: '50',
          Page: '2',
        },
      };
      const url = `https://api.novaposhta.ua/v2.0/json/`;
      try {
        const response = await axios.get(url, params);
        console.log(response.data);

        return response.data;
      } catch (error) {
        console.error('Error fetching data from Nova Poshta API:', error);
      }
    }
    fetchNovaPoshtaData();
  }, []);

  return isRefreshing ? (
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
