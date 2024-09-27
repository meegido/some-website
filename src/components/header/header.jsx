import React from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../providers/theme-provider';
import { UserContext } from '../../providers/user-provider';

function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { logout, isLoggedIn } = React.useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className={styles.wrapper} data-theme={theme}>
      <h1>Some website</h1>
      <div className="actions">
        <div className="actions-item">
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Activate dark mode' : 'Deactivate dark mode'}
          </button>
          {isLoggedIn && <button onClick={handleLogout}>Log out</button>}
        </div>
      </div>
    </header>
  );
}

export default Header;
