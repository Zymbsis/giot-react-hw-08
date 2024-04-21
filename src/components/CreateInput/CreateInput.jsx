import { useField } from 'formik';
import clsx from 'clsx';

const CreateInput = ({
  label,
  wrapperClassName,
  invalidClassName,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div
      className={clsx(wrapperClassName, {
        [invalidClassName]: meta.touched && meta.error,
      })}
    >
      <input {...field} {...props} />
      <label htmlFor={props.id}>{label}</label>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  );
};

export default CreateInput;
