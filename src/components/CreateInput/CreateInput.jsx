import { useField } from 'formik';
import clsx from 'clsx';

const CreateInput = ({ label, invalidClassName, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <input
        className={clsx({
          [invalidClassName]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </>
  );
};

export default CreateInput;
