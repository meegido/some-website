import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { UserContext } from '../../../providers/user-provider';
import profileImage from '../../../assets/images/profile.jpg';
import { ChevronDown, ChevronUp, Moon, ShoppingCart, Sun } from 'lucide-react';

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

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

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
              <div className={styles.dropdown}>
                <button className={styles.avatar__button} onClick={toggleDropdown}>
                  <div className={styles.avatar__wrapper}>
                    <img src={profileImage} alt="User profile image" />
                  </div>
                  <div>
                    {isProfileOpen ? (
                      <ChevronUp size={20} strokeWidth={3} />
                    ) : (
                      <ChevronDown size={20} strokeWidth={3} />
                    )}
                  </div>
                </button>
                {isProfileOpen && (
                  <div className={styles.dropdown__content} ref={dropdownRef}>
                    <button
                      className={`${styles.header__button} ${styles.logout__button}`}
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
