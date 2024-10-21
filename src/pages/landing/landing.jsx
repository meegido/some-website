import LoginForm from './form/login-form';
import styles from './landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing__wrapper}>
      <div className={styles.hero__wrapper}>
        <section className={styles.hero}>
          <h1 className={styles.landing__title}>A place where to hone my skills</h1>
          <p>
            See how I approach and solve Frontend coding problems. This site is a working progress
            to learn React, testing and architecture matters.
          </p>
        </section>
        <section className={styles.form__wrapper}>
          <aside className={styles.disclaimer}>
            <p>Login (local storage) to explore.</p>
          </aside>
          <article className={styles.form}>
            <LoginForm />
          </article>
        </section>
      </div>
    </div>
  );
};

export default Landing;
