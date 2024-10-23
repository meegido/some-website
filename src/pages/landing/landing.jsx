import styles from './landing.module.css';
import tipCalculatorPreview from '../../assets/images/tip-calculator-preview.jpg';
import ecommercePagePreview from '../../assets/images/product-page-ecommerce.jpg';

const Landing = () => {
  return (
    <div className={styles.landing__wrapper}>
      <section className={styles.hero__wrapper}>
        <div className={styles.hero}>
          <h1 className={styles.landing__title}>A place where to hone my skills.</h1>
          <p>
            See how I approach and solve Frontend coding problems. This site is a working progress
            to learn React, testing and architecture matters.
          </p>
        </div>
        <div className={styles.form__wrapper}>
          <article className={styles.form}>
            <p>something here</p>
          </article>
        </div>
      </section>
      <section className={styles.roadmap__wrapper}>
        <h2 className={styles.roadmap__title}>Roadmap</h2>
        <section className={styles.cards__wrapper}>
          <article className={styles.roadmap__card}>
            <header>
              <h3>Now</h3>
              <p>React</p>
            </header>
            <section className={styles.skills}>
              <ul>
                <li>
                  <p>Custom hooks</p>
                </li>
                <li>
                  <p>State management</p>
                </li>
                <li>
                  <p>DOM interaction</p>
                </li>
                <li>
                  <p>Testing</p>
                </li>
              </ul>
            </section>
          </article>
          <article className={styles.roadmap__card}>
            <header>
              <h3>Next</h3>
              <p>Typescript</p>
            </header>
            <section className={styles.skills}>
              <ul>
                <li>
                  <p>Advanced React</p>
                </li>
                <li>
                  <p>TDD</p>
                </li>
              </ul>
            </section>
          </article>
          <article className={styles.roadmap__card}>
            <header>
              <h3>Later</h3>
              <p>Advanced</p>
            </header>
            <section className={styles.skills}>
              <ul>
                <li>
                  <p>Frontend Architecture</p>
                </li>
                <li>
                  <p>Performance</p>
                </li>
                <li>
                  <p>TDD</p>
                </li>
              </ul>
            </section>
          </article>
        </section>
      </section>
      <section className={styles.projects__wrapper}>
        <h2 className={styles.roadmap__title}>Exercises</h2>
        <section className={styles.cards__wrapper}>
          <article className={styles.exercises__card}>
            <h3>Tip calculator</h3>
            <img
              className={styles.thumbnail}
              src={tipCalculatorPreview}
              alt="Tip Calculator preview"
            />
          </article>
          <article className={styles.exercises__card}>
            <h3>E-commerce product page</h3>
            <img
              className={styles.thumbnail}
              src={ecommercePagePreview}
              alt="E-commerce product page"
            />
          </article>
        </section>
      </section>
    </div>
  );
};

export default Landing;
