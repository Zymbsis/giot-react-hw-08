import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/selectors';

import error from '../../img/error.jpg';
import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  const typeError = useSelector(selectError);

  return (
    <>
      {typeError === 'fetch error' ? (
        <div className={css.error}>
          <img src={error} alt="Error message" width={924} />
          <p>An error occurred. Please reload the page or try again later.</p>
        </div>
      ) : (
        <p className={css.deleteError}>
          An error occurred. Please reload the page or try again later.
        </p>
      )}
    </>
  );
};

export default ErrorMessage;
