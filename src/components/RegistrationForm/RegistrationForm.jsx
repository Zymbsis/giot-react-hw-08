import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Formik } from 'formik';
import { registrationFormValidationSchema } from '../../services/constants';

import CreateInput from '../InputField/InputField';

import css from '../AuthorizationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const formId = { name: useId(), email: useId(), password: useId() };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={registrationFormValidationSchema}
    >
      <Form className={css.form}>
        <CreateInput
          label="Name"
          id={formId.name}
          placeholder=""
          name="name"
          type="text"
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <CreateInput
          label="Email"
          id={formId.email}
          placeholder=""
          name="email"
          type="email"
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <CreateInput
          label="Password"
          id={formId.password}
          placeholder=""
          name="password"
          type="password"
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <button className={css.signUpButton} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
