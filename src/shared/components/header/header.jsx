import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { UserContext } from '../../../providers/user-provider';
import { Moon, ShoppingCart, Sun, Trash } from 'lucide-react';
import Dropdown from './dropdown/dropdown';
import productThumbnail from '../../../assets/images/product/image-product-1.jpg';

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { logout, isLoggedIn } = React.useContext(UserContext);
  const [isProfileOpen, setProfileOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const dropdownRef = React.useRef();
  const cartTriggerRef = React.useRef();
  const cartContentRef = React.useRef();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setProfileOpen(false);
    }
  };

  const handleCartClickOutside = (event) => {
    if (
      cartContentRef.current &&
      !cartTriggerRef.current.contains(event.target) &&
      !cartContentRef.current.contains(event.target)
    ) {
      setIsCartOpen(false);
    }
  };

  const handleDismiss = (event) => {
    if (event.code === 'Escape') {
      setProfileOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('mousedown', handleCartClickOutside);
    window.addEventListener('keydown', handleDismiss);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('mousedown', handleCartClickOutside);
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

  const toggleCart = () => {
    setIsCartOpen((prevIsOpen) => !prevIsOpen);
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
              <div className={styles.cart__popover}>
                <button onClick={toggleCart} className={styles.header__button} ref={cartTriggerRef}>
                  <ShoppingCart />
                </button>
                {isCartOpen && (
                  <div className={styles.cart__wrapper} ref={cartContentRef}>
                    <div className={styles.popover__title}>
                      <h3>Cart</h3>
                    </div>
                    <section className={styles.cart__content}>
                      <img
                        className={styles.cart__thumbnail}
                        src={productThumbnail}
                        alt="Image product cart"
                      />
                      <div className={styles.product__details}>
                        <p>Fall Limited Edition Sneakers</p>
                        <div className={styles.cart__price}>
                          <p>$125.00</p>
                          <p>x</p>
                          <p>3</p>
                          <p>
                            <b>$375.00</b>
                          </p>
                        </div>
                      </div>
                      <div className={styles.remove}>
                        <button>
                          <Trash />
                        </button>
                      </div>
                    </section>
                    <div className={styles.cart__button}>
                      <button>Checkout</button>
                    </div>
                  </div>
                )}
              </div>
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
