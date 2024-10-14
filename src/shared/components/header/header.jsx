import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { UserContext } from '../../../providers/user-provider';
import { ChevronDown, ChevronUp, Moon, ShoppingCart, Sun } from 'lucide-react';
import Dropdown from './dropdown/dropdown';

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { logout, isLoggedIn } = React.useContext(UserContext);
  const [isProfileOpen, setProfileOpen] = React.useState(false);
  const dropdownRef = React.useRef();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setProfileOpen(false);
    }
  };

  const handleDismiss = (event) => {
    if (event.code === 'Escape') {
      setProfileOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleDismiss);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleDismiss);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('login');
    setProfileOpen(false);
  };

  const toggleDropdown = () => {
    setProfileOpen((prevIsOpen) => !prevIsOpen);
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
            {isLoggedIn && (
              <button className={styles.header__button}>
                <ShoppingCart />
              </button>
            )}
            <button className={styles.header__button} onClick={toggleTheme}>
              {theme === 'light' ? <Sun /> : <Moon />}
            </button>
            {isLoggedIn && (
              <Dropdown
                toggleDropdown={toggleDropdown}
                isProfileOpen={isProfileOpen}
                handleLogout={handleLogout}
                dropdownRef={dropdownRef}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
