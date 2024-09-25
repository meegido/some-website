import React from 'react';
import styles from './login-form.module.css';

function InputField({ label, id, type = 'text', ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;

  return (
    <div className={styles['input']}>
      <label htmlFor={appliedId}>{label}</label>
      <input type={type} id={appliedId} {...delegated} />
    </div>
  );
}

export default InputField;
