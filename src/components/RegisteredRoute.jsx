import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in,
 *  render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const isUserLoggedIn = false;

  return isUserLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
