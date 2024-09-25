import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

function Header({ isDarkMode, handleToggle }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header
      className={styles.wrapper}
      style={{
        // NOTE: This is a just-for-fun mini demo, not a
        // full-featured Dark Mode implementation!
        '--color-bg': isDarkMode ? 'black' : 'white',
        '--color-text': isDarkMode ? 'white' : 'black',
      }}
    >
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
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
