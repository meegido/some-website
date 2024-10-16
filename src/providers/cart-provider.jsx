import React from 'react';

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (id, price, quantity) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        id: id,
        title: 'Fall Limited Edition Sneakers',
        photo: '../../../assets/images/product/image-product-1.jpg',
        price: price,
        quantity: quantity,
      },
    ]);
  };

  const updateCart = (quantity, price) => {
    setCart(
      cart.map((item) => {
        return {
          ...item,
          quantity,
          price,
        };
      })
    );
  };

  const removeCart = (itemId) => {
    if (itemId === 'abc123') {
      setCart([]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        updateCart,
        removeCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;