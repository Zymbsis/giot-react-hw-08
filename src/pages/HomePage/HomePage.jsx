import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className="section">
      <div className={`${css.container} container`}>
        <h1 className={css.mainTitle}>PhoneBook</h1>
      </div>
    </section>
  );
};

export default HomePage;
