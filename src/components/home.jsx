import React from 'react';
import styles from './home.module.css';

const Home = () => {
  const [totalBillAmount, setTotalBillAmount] = React.useState(0);
  const [totalPeopleAmount, setTotalPeopleAmount] = React.useState(0);
  const [selectedTipAmount, setSelectedTipAmount] = React.useState(0);

  const tipOptions = [5, 10, 15, 20, 50, 'Custom'];
  const handleSelectTip = (tip) => {
    console.log('Selected tip:', tip);
    if (tipOptions.includes(tip)) {
      setSelectedTipAmount(tip);
    }
  };

  return (
    <>
      <section className={styles['page__wrapper']}>
        <h1 className={styles['page__title']}>Split your bill 💸</h1>
        <div className={styles['calculator__wrapper']}>
          <section className={styles['calculator__config']}>
            <article className={`${styles.config}`}>
              <label>Bill</label>
              <input
                type="number"
                placeholder="0"
                name="bill-amount"
                id="totalBillAmount"
                value={totalBillAmount}
                onChange={(event) => setTotalBillAmount(event.target.value)}
              />
            </article>
            <article className={styles.config}>
              <p>Select a tip</p>
              <div className={styles.tip}>
                {tipOptions.map((tip) => (
                  <button
                    aria-label="tip-button"
                    type="button"
                    key={tip}
                    className={`${styles['config__button']} ${selectedTipAmount === tip ? styles.selected : ''}`}
                    onClick={() => handleSelectTip(tip)}
                  >
                    {tip === 'Custom' ? 'Custom' : `${tip}%`}
                  </button>
                ))}
              </div>
            </article>
            <article className={styles.config}>
              <label htmlFor="people">Number of people</label>
              <input
                type="number"
                placeholder="0"
                name="people"
                id="totalPeopleAmount"
                value={totalPeopleAmount}
                onChange={(event) => setTotalPeopleAmount(event.target.value)}
              />
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
              <button type="submit" className={styles['reset__button']}>
                Reset
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
