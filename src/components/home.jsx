import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <section className={styles['page__wrapper']}>
        <h1 className={styles['page__title']}>Split your bill 💸</h1>
        <div className={styles['calculator__wrapper']}>
          <section className={styles['calculator__config']}>
            <article className={`${styles.config}`}>
              <label>Bill</label>
              <input type="text" />
            </article>
            <article className={styles.config}>
              <p>Select a tip</p>
              <div className={styles.tip}>
                <button className={styles['config__button']}>5%</button>
                <button className={styles['config__button']}>10%</button>
                <button className={styles['config__button']}>15%</button>
                <button className={styles['config__button']}>20%</button>
                <button className={styles['config__button']}>50%</button>
                <button className={styles['config__button']}>Custom</button>
              </div>
            </article>
            <article className={styles.config}>
              <label htmlFor="people">Number of people</label>
              <input type="text" />
            </article>
          </section>
          <section className={styles.display}>
            <article className={styles['display__result']}>
              <div className={styles.legend}>
                <h3>Tip Amount</h3>
                <p>/person</p>
              </div>
              <div className={styles.amount}>
                <p>4.5€</p>
              </div>
            </article>
            <article className={styles['display__result']}>
              <div className={styles.legend}>
                <h3>Total</h3>
                <p>/person</p>
              </div>
              <div className={styles.amount}>
                <p>34.5€</p>
              </div>
            </article>
            <div className={styles.reset}>
              <button className={styles['reset__button']}>Reset</button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
