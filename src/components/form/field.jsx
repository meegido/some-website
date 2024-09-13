import styles from './login-form.module.css';

function Field({ value, type = 'text', label, id, onChange }) {
  return (
    <div className={styles['input']}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default Field;
