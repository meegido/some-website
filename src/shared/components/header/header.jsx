import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { Moon, Sun } from 'lucide-react';
import ProfileDropdown from './profile-dropdown/profile-dropdown';
import useToggle from '../../../hooks/use-toggle';
import { Menu } from 'lucide-react';
import Drawer from './drawer/drawer';

const Header = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <div className={styles.header__wrapper} data-theme={theme}>
      <header className={styles.header}>
        <h1 className={styles.logotype}>
          <NavLink to="/">Some website</NavLink>
        </h1>

        {isMenuOpen ? (
          <Drawer handleDismiss={toggleIsMenuOpen} className={styles.drawer}>
            <nav className={styles.mobile__nav}>
              <ul className={styles.navigation__list}>
                <li>
                  <NavLink to="/exercises">Exercises</NavLink>
                </li>
                <li>
                  <NavLink to="/ai-gallery">AI Gallery</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
              </ul>
            </nav>
          </Drawer>
        ) : (
          <nav className={styles.desktop__nav}>
            <ul className={styles.navigation__list}>
              <li>
                <NavLink to="/exercises">Exercises</NavLink>
              </li>
              <li>
                <NavLink to="/ai-gallery">AI Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        )}
        <div className={styles.actions}>
          <div className={styles.theme__button}>
            <button className={styles.header__button} onClick={toggleTheme}>
              {theme === 'light' ? <Sun /> : <Moon />}
            </button>
          </div>
          <button className={styles.hamburguer__btn} onClick={toggleIsMenuOpen}>
            <Menu />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
