import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(credentials);

    dispatch(register(credentials));
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete={false}>
        <input type="name" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
