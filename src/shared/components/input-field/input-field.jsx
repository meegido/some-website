import styles from './input-field.module.css';

function InputField({ label, error, id, type = 'text', ...delegated }) {
  return (
    <div className={styles['input__wrapper']}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} className={`${error ? styles.inputError : ''}`} {...delegated} />
      {error && <p style={{ color: '#d84301' }}>{error}</p>}
    </div>
  );
}

export default InputField;
