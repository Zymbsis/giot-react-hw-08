import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string().email('Incorrect email format').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short! Length must be between 6 and 15 characters')
    .max(15, 'Too Long! Length must be between 6 and 15 characters')
    .required('Required'),
});

export const registrationFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Length must be between 3 and 20 characters')
    .max(20, 'Too Long! Length must be between 3 and 20 characters')
    .required('Required'),
  email: Yup.string().email('Incorrect email format').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short! Length must be between 6 and 15 characters')
    .max(15, 'Too Long! Length must be between 6 and 15 characters')
    .required('Required'),
});

export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Length must be between 3 and 20 characters')
    .max(20, 'Too Long! Length must be between 3 and 20 characters')
    .required('Required'),
  number: Yup.number()
    .min(10, 'Too Short! Length must be between 10 and 15 characters')
    .max(15, 'Too Long! Length must be between 10 and 15 characters')
    .positive()
    .integer()
    .required('Required'),
});
