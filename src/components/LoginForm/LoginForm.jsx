import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import { login } from '../../redux/auth/operations';
import { loginFormValidationSchema } from '../../services/constants';

import CreateInput from '../InputField/InputField';

import css from '../AuthorizationForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const formId = { email: useId(), password: useId() };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginFormValidationSchema}
    >
      <Form className={css.form}>
        <CreateInput
          label="Email"
          id={formId.email}
          name="email"
          type="email"
          placeholder=""
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <CreateInput
          label="Password"
          id={formId.password}
          name="password"
          type="password"
          placeholder=""
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <button className={css.signUpButton} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
