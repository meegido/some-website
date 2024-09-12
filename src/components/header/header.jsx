import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.wrapper}>
      <h1>Some website</h1>
      <div className="actions">
        <div className="actions-item">
          <button>Activate dark mode</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
