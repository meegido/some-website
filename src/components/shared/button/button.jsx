import styles from './button.module.css';

const Button = ({ type, children, ...delegated }) => {
  return (
    <button className={styles.wrapper} type={type} {...delegated}>
      <span className={styles.childreWrapper}>{children}</span>
    </button>
  );
};

export default Button;
