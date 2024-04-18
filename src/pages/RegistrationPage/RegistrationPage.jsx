import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegistrationPage.module.css';
import { Form, Formik } from 'formik';
import CreateInput from '../../components/CreateInput/CreateInput';

const RegistrationPage = () => {
  const dispatch = useDispatch();

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
            <CreateInput placeholder="Name" name="name" type="text" />
            <CreateInput placeholder="Email" name="email" type="email" />
            <CreateInput
              placeholder="Password"
              name="password"
              type="password"
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
