import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../redux/modal/slice';
import css from './EditContactModal.module.css';
import { updateContact } from '../../redux/contacts/operations';
import { selectContact } from '../../redux/contacts/slice';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CreateInput from '../CreateInput/CreateInput';

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
    <div className={css.editModal}>
      <Formik
        initialValues={{ name: contact.name, number: contact.number }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.searchForm}>
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
    </div>
  );
};

export default EditContact;
