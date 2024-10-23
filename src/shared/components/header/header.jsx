import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { AuthContext } from '../../../providers/auth-provider';
import { Moon, Sun } from 'lucide-react';
import ProfileDropdown from './profile-dropdown/profile-dropdown';

import { CartContext } from '../../../providers/cart-provider';
import CartPopover from './cart-popover/cart-popover';

const Header = () => {
  const { cart } = React.useContext(CartContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const cartItem = cart.length > 0 ? cart[0] : [];

  return (
    <div className={styles.header__wrapper} data-theme={theme}>
      <header className={styles.header}>
        <h1 className={styles.logotype}>
          <NavLink to="/">Some website</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/exercises">Exercises</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <div className={styles.action__items}>
            <CartPopover cartItem={cartItem} />
            <div className={styles.theme__button}>
              <button className={styles.header__button} onClick={toggleTheme}>
                {theme === 'light' ? <Sun /> : <Moon />}
              </button>
            </div>
            <ProfileDropdown />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
