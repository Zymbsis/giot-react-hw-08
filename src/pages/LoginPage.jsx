import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import css from './AuthorizationForm.module.css';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import CreateInput from '../components/CreateInput/CreateInput';
import { useId } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
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
      </div>
    </section>
  );
};

export default LoginPage;
