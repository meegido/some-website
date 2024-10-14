import { screen, render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductPage from './product-page';

describe('Product page', () => {
  it('renders a product gallery', () => {
    render(<ProductPage />);

    const altImage = screen.getByAltText('Product image 0');
    expect(altImage).toBeInTheDocument();
  });

  it('renders the product price based on a variable discount amount', () => {
    render(<ProductPage />);

    const price = screen.getByText('$250.00');
    expect(price).toBeInTheDocument();

    const discountPrice = screen.getByText('$125');
    expect(discountPrice).toBeInTheDocument();
  });

  it('handles the amount of products to add to the cart', () => {
    render(<ProductPage />);

    const increaseButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(increaseButton);
    expect(increaseButton).toBeInTheDocument();

    const quantityElement = screen.getByTestId('product-quantity');
    expect(quantityElement).toHaveTextContent('1');

    const decreaseButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(decreaseButton);
    expect(decreaseButton).toBeInTheDocument();
    expect(quantityElement).toHaveTextContent('0');
  });
});
