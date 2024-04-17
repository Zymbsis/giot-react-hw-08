import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../redux/auth/selectors';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const isUserLoggedIn = false;

  return isUserLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
