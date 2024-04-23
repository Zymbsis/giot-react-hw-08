import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { contactFormValidationSchema } from '../../services/constants';
import { modalClose } from '../../redux/modal/slice';
import { updateContact } from '../../redux/contacts/operations';
import { selectContact } from '../../redux/contacts/slice';

import CreateInput from '../InputField/InputField';

import css from './EditContactModal.module.css';

const EditContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  const handleSubmit = values => {
    dispatch(
      updateContact({
        id: contact.id,
        credentials: values,
      })
    );
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.formWrapper}>
          <CreateInput
            name="name"
            type="text"
            wrapperClassName={css.inputWrapper}
            invalidClassName={css.invalid}
          />
          <CreateInput
            name="number"
            type="tel"
            wrapperClassName={css.inputWrapper}
            invalidClassName={css.invalid}
          />
        </div>
        <div className={css.buttonWrapper}>
          <button type="submit">Edit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditContact;
