import React from 'react';
import styles from './header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../providers/theme-provider';
import { AuthContext } from '../../../providers/auth-provider';
import { Minus, Moon, Plus, ShoppingCart, Sun, Trash } from 'lucide-react';
import Dropdown from './dropdown/dropdown';
import productThumbnail from '../../../assets/images/product/image-product-1.jpg';
import useToggle from '../../../hooks/use-toggle';
import { CartContext } from '../../../providers/cart-provider';

const Header = () => {
  const navigate = useNavigate();
  const { cart, removeCart } = React.useContext(CartContext);
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { logout, isLoggedIn } = React.useContext(AuthContext);
  const [checkoutQuantity, setChekoutQuantity] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [isProfileOpen, toggleProfile] = useToggle(false);
  const [isCartOpen, toggleCart] = useToggle(false);
  const dropdownRef = React.useRef();
  const cartTriggerRef = React.useRef();
  const cartContentRef = React.useRef();

  const cartItem = cart.find((item) => {
    return item.id === item.id;
  });

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleProfile(false);
      }
    };

    const handleCartClickOutside = (event) => {
      if (
        cartContentRef.current &&
        !cartTriggerRef.current.contains(event.target) &&
        !cartContentRef.current.contains(event.target)
      ) {
        toggleCart(false);
      }
    };

    const handleDismiss = (event) => {
      if (event.code === 'Escape') {
        toggleProfile(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('mousedown', handleCartClickOutside);
    window.addEventListener('keydown', handleDismiss);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('mousedown', handleCartClickOutside);
      window.removeEventListener('keydown', handleDismiss);
    };
  }, [toggleProfile, toggleCart]);

  React.useEffect(() => {
    if (!cartItem) {
      return;
    }
    setChekoutQuantity(cartItem.quantity);
  }, [cartItem]);

  React.useEffect(() => {
    if (!cartItem) {
      return;
    }
    setTotalPrice(cartItem.price * checkoutQuantity);
  }, [cartItem, checkoutQuantity]);

  const handleIncreaseQuantity = () => {
    setChekoutQuantity((current) => current + 1);
  };

  const handleDecreaseQuantity = () => {
    if (checkoutQuantity > 1) {
      setChekoutQuantity((current) => current - 1);
    }
  };

  const handleCheckout = () => {
    if (!cartItem) {
      return;
    }
    window.alert(`Cart updated with quantity ${checkoutQuantity}`);
  };
  console.log(cart, 'new cart');
  const handleRemoveFromCart = () => {
    removeCart(cartItem.id);
  };

  const handleLogout = () => {
    logout();
    navigate('login');
    toggleProfile(false);
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
                <button
                  onClick={() => toggleCart()}
                  className={styles.header__button}
                  ref={cartTriggerRef}
                >
                  <ShoppingCart />
                </button>
                {isCartOpen && (
                  <div className={styles.cart__wrapper} ref={cartContentRef}>
                    <div className={styles.popover__title}>
                      <h3>Cart</h3>
                    </div>
                    {cartItem && cartItem !== Array.isArray([]) ? (
                      <section className={styles.cart__content}>
                        <div className={styles.content__wrapper}>
                          <img
                            className={styles.cart__thumbnail}
                            src={productThumbnail}
                            alt="Image product cart"
                          />
                          <div className={styles.with__buttons}>
                            <div className={styles.product__details}>
                              <p>{cartItem.title}</p>
                              <div className={styles.cart__price}>
                                <p>{`$${cartItem.price}`}</p>
                                <p>x</p>
                                <p>{checkoutQuantity}</p>
                                <p>
                                  <b>{`$${totalPrice}`}</b>
                                </p>
                              </div>
                            </div>
                            <div className={styles.remove}>
                              <button onClick={handleIncreaseQuantity}>
                                <Plus size={20} />
                              </button>
                              {checkoutQuantity > 1 ? (
                                <button onClick={handleDecreaseQuantity}>
                                  <Minus size={20} />
                                </button>
                              ) : (
                                <button onClick={handleRemoveFromCart}>
                                  <Trash size={20} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className={styles.cart__button}>
                          <button
                            className={!cartItem ? `${styles.disable}` : ''}
                            onClick={handleCheckout}
                          >
                            Checkout
                          </button>
                        </div>
                      </section>
                    ) : (
                      <p>No products</p>
                    )}
                  </div>
                )}
              </div>
            )}
            <button className={styles.header__button} onClick={toggleTheme}>
              {theme === 'light' ? <Sun /> : <Moon />}
            </button>
            {isLoggedIn && (
              <Dropdown
                toggleDropdown={() => toggleProfile()}
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
