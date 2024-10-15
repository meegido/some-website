import React from 'react';

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (discountPrice, productQuantity) => {
    setCart((prevCart) => [
      ...prevCart,
      {
        id: '123',
        title: 'Fall Limited Edition Sneakers',
        photo: '../../../assets/images/product/image-product-1.jpg',
        price: discountPrice,
        quantity: productQuantity,
      },
    ]);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
