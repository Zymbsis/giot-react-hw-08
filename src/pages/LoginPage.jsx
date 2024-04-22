import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../redux/auth/operations';
import { selectAuthLoading } from '../redux/auth/slice';

import CreateInput from '../components/CreateInput/CreateInput';
import Loader from '../components/Loader/Loader';

import css from './AuthorizationForm.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const formId = { email: useId(), password: useId() };

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(login(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
    password: Yup.string()
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
  });

  return (
    <section className="section">
      <div className="container">
        {authLoading ? (
          <Loader />
        ) : (
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
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
        )}
      </div>
    </section>
  );
};

export default LoginPage;
