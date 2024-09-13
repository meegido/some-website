import React from 'react';
import styles from './header.module.css';

function Header({ isDarkMode, handleDarkMode }) {
  console.log({ isDarkMode });
  return (
    <header className={styles.wrapper}>
      <h1>Some website</h1>
      <div className="actions">
        <div className="actions-item">
          <button onClick={handleDarkMode}>
            {!isDarkMode ? 'Activate dark mode' : 'Deactivate dark mode'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
