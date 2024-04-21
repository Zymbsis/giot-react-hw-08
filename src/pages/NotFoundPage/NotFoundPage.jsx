import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className="section">
      <div className={`${css.container} container`}>
        <p>
          We`re sorry, but the page you are looking for does not exist. Please
          check the URL for any mistakes or try navigating back to the homepage.
        </p>
        <Link className={css.homePageLink} to="/">
          HomePage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
