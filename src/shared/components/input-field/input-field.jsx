import React from 'react';
import styles from './input-field.module.css';

function InputField({ label, error, id, type = 'text', ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <div className={styles['input__wrapper']}>
      <label htmlFor={appliedId}>{label}</label>
      <input
        type={type}
        id={appliedId}
        className={`${error ? styles.inputError : ''}`}
        {...delegated}
      />
      {error && <p style={{ color: '#d84301' }}>{error}</p>}
    </div>
  );
}

export default InputField;
