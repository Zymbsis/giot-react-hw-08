import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { FaArrowRight } from 'react-icons/fa';
import { contactFormValidationSchema } from '../../services/constants';
import { addContact } from '../../redux/contacts/operations';

import CreateInput from '../CreateInput/CreateInput';

import css from './ContactForm.module.css';

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

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      <Form className={css.form}>
        <CreateInput
          label="Name"
          name="name"
          type="text"
          id={formId.name}
          placeholder=""
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <CreateInput
          label="Number"
          name="number"
          type="tel"
          id={formId.number}
          placeholder=""
          wrapperClassName={css.inputWrapper}
          invalidClassName={css.invalid}
        />
        <button type="submit">
          <span>Add contact</span> <FaArrowRight className={css.icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
