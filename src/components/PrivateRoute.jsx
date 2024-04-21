import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from '../redux/auth/slice';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  return isUserLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
