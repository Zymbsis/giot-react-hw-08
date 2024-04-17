import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(credentials);

    dispatch(login(credentials));
    form.reset();
  };

  return (
    <div className={css.formWrapper}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="false">
        <input type="email" name="email" placeholder="email" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
