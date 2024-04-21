import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../redux/auth/slice';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  return isUserLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
