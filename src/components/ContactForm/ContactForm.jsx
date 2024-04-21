import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import { FaArrowRight } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import CreateInput from '../CreateInput/CreateInput';

const ContactForm = () => {
  const dispatch = useDispatch();
  const formId = {
    name: useId(),
    number: useId(),
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short! Length must be between 3 and 50 characters')
      .max(50, 'Too Long! Length must be between 3 and 50 characters')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <CreateInput
          label="Name"
          name="name"
          type="text"
          id={formId.name}
          invalidClassName={css.invalid}
        />
        <CreateInput
          label="Number"
          name="number"
          type="tel"
          id={formId.number}
          invalidClassName={css.invalid}
        />
        <button className={css.addButton} type="submit">
          <span>Add contact</span> <FaArrowRight className={css.icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
