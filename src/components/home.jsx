import React from 'react';
import styles from './home.module.css';
import InputField from './shared/input-field/input-field';

const Home = () => {
  const [rawBill, setRawBill] = React.useState('');
  const [totalPeople, setTotalPeople] = React.useState('');
  const [selectedTipOption, setSelectedTipOption] = React.useState('');

  const [billPerPerson, setBillPerPerson] = React.useState(Number(0));
  const [tipPerPerson, setTipPerPerson] = React.useState(Number(0));

  const tipOptions = [5, 10, 15, 20, 50, 'Custom'];

  const handleSelectTip = (option) => {
    setSelectedTipOption(option);
  };

  const calculateAmounts = React.useCallback(() => {
    if (selectedTipOption === 'Custom') {
      return;
    }
    const tipCalculationNumber = parseFloat(selectedTipOption || 0) / 100; // Ensure it's a valid number

    const totalTipAmount = parseInt(rawBill) * tipCalculationNumber;
    const billAmount = parseFloat(rawBill) + totalTipAmount;

    const billPerPerson = billAmount / parseFloat(totalPeople || 1); // Default to 1 to avoid division by 0
    const tipPerPerson = totalTipAmount / parseFloat(totalPeople || 1); // Default to 1 to avoid division by 0

    setBillPerPerson(billPerPerson);
    setTipPerPerson(tipPerPerson);
  }, [rawBill, totalPeople, selectedTipOption]);

  React.useEffect(() => {
    if (rawBill && totalPeople && selectedTipOption) {
      calculateAmounts();
    }
  }, [calculateAmounts, rawBill, totalPeople, selectedTipOption]);

  const handleReset = () => {
    setRawBill(0);
    setTotalPeople(0);
    setSelectedTipOption(0);
    setBillPerPerson(0);
    setTipPerPerson(0);
  };

  return (
    <>
      <section className={styles['page__wrapper']}>
        <h1 className={styles['page__title']}>Split your bill 💸</h1>
        <div className={styles['calculator__wrapper']}>
          <section className={styles['calculator__config']}>
            <article className={`${styles.config}`}>
              <InputField
                label="Bill"
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
                {tipOptions.map((option) => (
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
                  <p>⚠️ Watch your wealth before choosing to tip more than 50%</p>
                )}
              </div>
            </article>
            <article className={styles.config}>
              <InputField
                label="Number of people"
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
              <div className={styles.amount}>
                {<p data-testid="tip-per-person">{tipPerPerson}€</p>}
              </div>
            </article>
            <article className={styles['display__result']}>
              <div className={styles.legend}>
                <h3>Total</h3>
                <p>/person</p>
              </div>
              <div className={styles.amount}>
                {<p data-testid="bill-per-person">{billPerPerson}€</p>}
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
