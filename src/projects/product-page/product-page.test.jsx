import { screen, render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProductPage from './product-page';
import { CartContext } from '../../providers/cart-provider';
import { MemoryRouter } from 'react-router-dom';

const mockCart = {
  cart: [],
  addItem: vi.fn(),
  removeItem: vi.fn(),
  clearCart: vi.fn(),
};

describe('Product page', () => {
  it('renders a product gallery', () => {
    render(
      <CartContext.Provider value={{ mockCart }}>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </CartContext.Provider>
    );

    const altImage = screen.getByAltText('Product image 0');
    expect(altImage).toBeInTheDocument();
  });

  it('renders the product price based on a variable discount amount', () => {
    render(
      <CartContext.Provider value={{ mockCart }}>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </CartContext.Provider>
    );

    const price = screen.getByText('$250.00');
    expect(price).toBeInTheDocument();

    const discountPrice = screen.getByText('$125');
    expect(discountPrice).toBeInTheDocument();
  });

  it('handles the amount of products to add to the cart', () => {
    render(
      <CartContext.Provider value={{ mockCart }}>
        <MemoryRouter>
          <ProductPage />
        </MemoryRouter>
      </CartContext.Provider>
    );

    const quantityElement = screen.getByLabelText('product-quantity');
    expect(quantityElement).toHaveTextContent(0);

    const increaseButton = screen.getByLabelText('Increase product quantity');
    fireEvent.click(increaseButton);
    expect(increaseButton).toBeInTheDocument();
    expect(quantityElement).toHaveTextContent(1);

    const decreaseButton = screen.getByLabelText('Decrease product quantity');
    fireEvent.click(decreaseButton);
    expect(decreaseButton).toBeInTheDocument();
    expect(quantityElement).toHaveTextContent(0);
  });
});
