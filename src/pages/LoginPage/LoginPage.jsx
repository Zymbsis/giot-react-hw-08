import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginPage.module.css';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import CreateInput from '../../components/CreateInput/CreateInput';

const LoginPage = () => {
  const dispatch = useDispatch();
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
            <CreateInput placeholder="Email" name="email" type="email" />
            <CreateInput
              placeholder="Password"
              name="password"
              type="password"
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
