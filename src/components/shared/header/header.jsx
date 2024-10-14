import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { UserContext } from '../../../providers/user-provider';
import profileImage from '../../../assets/images/profile.jpg';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { logout, isLoggedIn } = React.useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate('login');
  };

  return (
    <div className={styles.header__wrapper} data-theme={theme}>
      <header className={styles.header}>
        <h1 className={styles.logotype}>
          <NavLink to="/">Some website</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Exercises</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <div className={styles.action__items}>
            <button onClick={toggleTheme}>{theme === 'light' ? <Sun /> : <Moon />}</button>
            {isLoggedIn && <button onClick={handleLogout}>Log out</button>}
            <button className={styles.avatar__button}>
              <div className={styles.avatar__wrapper}>
                <img src={profileImage} alt="User profile image" />
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
