import styles from './landing.module.css';
import tipCalculatorPreview from '../../assets/images/tip-calculator-preview.jpg';
import ecommercePagePreview from '../../assets/images/product-page-ecommerce.jpg';
import landingPicture from '../../assets/images/ai-images/girl.png';

const Landing = () => {
  return (
    <div className={styles.landing__wrapper}>
      <section className={styles.hero__wrapper}>
        <div className={styles.hero}>
          <h1 className={styles.landing__title}>A place to play & hone my skills.</h1>
          <div className={styles.presentation}>
            <p>
              Here I face Frontend coding problems mixed with some personal playful interests. I
              face them by practicing React, TDD and a bit of CSS.
            </p>
            <p>
              <em>*This site is a working progress.</em>
            </p>
          </div>
        </div>
        <div className={styles.img__wrapper}>
          <article className={styles.form}>
            <img src={landingPicture} alt="landing image" />
          </article>
        </div>
      </section>
      <section className={styles.roadmap__wrapper}>
        <section className={styles.cards__wrapper}>
          <article className={styles.roadmap__card}>
            <header>
              <h3>Present</h3>
              <p>React</p>
            </header>
            <section className={styles.skills}>
              <ul>
                <li>
                  <p>Hooks && Custom hooks</p>
                </li>
                <li>
                  <p>State management</p>
                </li>
                <li>
                  <p>DOM interaction</p>
                </li>
                <li>
                  <p>Hello world TDD</p>
                </li>
              </ul>
            </section>
          </article>
          <article className={styles.roadmap__card}>
            <header>
              <h3>Short term</h3>
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
              <h3>Future</h3>
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
