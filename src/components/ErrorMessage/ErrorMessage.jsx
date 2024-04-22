import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <>
      <p className={css.error}>
        An error occurred. Please reload the page or try again later.
      </p>
    </>
  );
};

export default ErrorMessage;
