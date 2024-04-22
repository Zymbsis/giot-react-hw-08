import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import * as Yup from 'yup';
import css from './AuthorizationForm.module.css';
import { Form, Formik } from 'formik';
import CreateInput from '../components/CreateInput/CreateInput';
import { useId } from 'react';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const formId = { name: useId(), email: useId(), password: useId() };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
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
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
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
      </div>
    </section>
  );
};

export default RegistrationPage;