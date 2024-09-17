import React from 'react';
import styles from './header.module.css';

function Header({ isDarkMode, handleToggle }) {
  return (
    <header className={styles.wrapper}>
      <h1>Some website</h1>
      <div className="actions">
        <div className="actions-item">
          <button
            onClick={() => {
              handleToggle(!isDarkMode);
            }}
          >
            {!isDarkMode ? 'Activate dark mode' : 'Deactivate dark mode'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
