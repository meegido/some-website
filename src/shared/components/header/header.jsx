import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { AuthContext } from '../../../providers/auth-provider';
import { Moon, Sun } from 'lucide-react';
import ProfileDropdown from './profile-dropdown/profile-dropdown';

import { CartContext } from '../../../providers/cart-provider';
import CartPopover from './cart-popover/cart-popover';

const Header = () => {
  const navigate = useNavigate();
  const { cart } = React.useContext(CartContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { logout, isLoggedIn } = React.useContext(AuthContext);

  const cartItem = cart.length > 0 ? cart[0] : [];

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
            {isLoggedIn && <CartPopover cartItem={cartItem} />}
            <div className={styles.theme__button}>
              <button className={styles.header__button} onClick={toggleTheme}>
                {theme === 'light' ? <Sun /> : <Moon />}
              </button>
            </div>
            {isLoggedIn && <ProfileDropdown handleLogout={handleLogout} />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
