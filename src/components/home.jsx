import React from 'react';
import styles from './home.module.css';

const Home = () => {
  const [rawBill, setRawBill] = React.useState('');
  const [totalPeople, setTotalPeople] = React.useState('');
  const [selectedTipOption, setSelectedTipOption] = React.useState('');

  const tipOption = [5, 10, 15, 20, 50, 'Custom'];

  const handleSelectTip = (option) => {
    setSelectedTipOption(option);
  };

  const calculateAmounts = () => {
    if (selectedTipOption === 'Custom') {
      return;
    }
    const tipCalculationNumber = parseFloat(selectedTipOption) / 100;

    const totalTipAmount = parseFloat(rawBill) * tipCalculationNumber;
    const billAmount = parseFloat(rawBill) + totalTipAmount;

    return {
      billPerPerson: billAmount / parseFloat(totalPeople),
      tipPerPerson: totalTipAmount / parseFloat(totalPeople),
    };
  };

  const allInfoFilled = rawBill && totalPeople && selectedTipOption;

  const handleReset = () => {
    setRawBill(0);
    setTotalPeople(0);
    setSelectedTipOption(0);
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
                aria-label="Bill amount"
                name="bill-amount"
                id="rawBill"
                value={rawBill}
                onChange={(event) => setRawBill(event.target.value)}
              />
            </article>
            <article className={styles.config}>
              <p>Select a tip</p>
              <div className={styles.tip}>
                {tipOption.map((option) => (
                  <button
                    aria-label="Tip button"
                    type="button"
                    key={option}
                    className={`${styles['config__button']} ${selectedTipOption === option ? styles.selected : ''}`}
                    onClick={() => handleSelectTip(option)}
                  >
                    {option === 'Custom' ? 'Custom' : `${option}%`}
                  </button>
                ))}
                {selectedTipOption === 'Custom' && (
                  <p>⚠️ Check your welthness before choosing a tip bigger than 50%</p>
                )}
              </div>
            </article>
            <article className={styles.config}>
              <label htmlFor="people">Number of people</label>
              <input
                type="number"
                aria-label="People amount"
                name="people"
                id="totalPeople"
                value={totalPeople}
                onChange={(event) => setTotalPeople(event.target.value)}
              />
            </article>
          </section>
          <section className={styles.display}>
            <article className={styles['display__result']}>
              <div className={styles.legend}>
                <h3>Tip Amount</h3>
                <p>/person</p>
              </div>
              <div data-test-id="tip-per-person" className={styles.amount}>
                {allInfoFilled ? <p>{calculateAmounts().tipPerPerson}€</p> : '-'}
              </div>
            </article>
            <article className={styles['display__result']}>
              <div className={styles.legend}>
                <h3>Total</h3>
                <p>/person</p>
              </div>
              <div data-test-id="bill-per-person" className={styles.amount}>
                {allInfoFilled ? <p>{calculateAmounts().billPerPerson}€</p> : '-'}
              </div>
            </article>
            <div className={styles.reset}>
              <button
                type="submit"
                aria-label="reset-button"
                onClick={() => handleReset()}
                className={styles['reset__button']}
              >
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
