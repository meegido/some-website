import { describe, expect, it } from 'vitest';
import Home from './home';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('should render the home page', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Split your bill 💸' })).toBeInTheDocument();
  });

  it('should update the bill amount', () => {
    render(<Home />);

    const billAmount = document.querySelector('#totalBillAmount');
    expect(billAmount).toHaveValue(0);

    billAmount.value = 100;
    expect(billAmount).toHaveValue(100);
  });

  it('should update the person amount', () => {
    render(<Home />);
    const peopleAmount = document.querySelector('#totalPeopleAmount');
    expect(peopleAmount).toHaveValue(0);

    peopleAmount.value = 5;
    expect(peopleAmount).toHaveValue(5);
  });

  it('should render the options for the tip', () => {
    render(<Home />);
    const tipOptions = screen.getAllByLabelText('tip-button');
    expect(tipOptions).toHaveLength(6);
  });

  it('should update the tip amount', () => {
    render(<Home />);

    const tipButton = screen.getByText('5%');
    expect(tipButton).not.toHaveClass('selected');
    expect(tipButton).toHaveClass('_config__button_0891d1');

    fireEvent.click(tipButton);
    expect(tipButton).toHaveClass(['config__button', 'selected']);
  });
});
