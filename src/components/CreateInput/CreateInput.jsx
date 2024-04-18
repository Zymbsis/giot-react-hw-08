import { useField } from 'formik';
import clsx from 'clsx';
import css from './CreateInput.module.css';

const CreateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input
        className={clsx(css.input, {
          [css.invalid]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className={css.error}>{meta.error}</span>
      ) : null}
    </>
  );
};

export default CreateInput;
