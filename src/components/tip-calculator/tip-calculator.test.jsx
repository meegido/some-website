import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import TipCalculator from './tip-calculator';

describe('Tip Calculator', () => {
  it('renders the page', () => {
    render(<TipCalculator />);

    expect(screen.getByRole('heading', { name: 'Split your bill 💸' })).toBeInTheDocument();
  });

  it('updates the bill amount when user enters the bill amount', () => {
    render(<TipCalculator />);

    const billInput = screen.getByLabelText('Bill amount');

    fireEvent.change(billInput, { target: { value: '100' } });

    expect(billInput.value).toBe('100');
  });

  it('updates the person amount when user enters the number of people to share the total amount with', () => {
    render(<TipCalculator />);
    const peopleInput = screen.getByLabelText('People amount');
    fireEvent.change(peopleInput, { target: { value: 5 } });

    expect(peopleInput).toHaveValue(5);
  });

  it('renders the options for the tip', () => {
    render(<TipCalculator />);
    const tipOptions = screen.getAllByLabelText('Tip button');
    expect(tipOptions.length).toBe(6);
  });

  it('adds a class to the selected option so the user can recognise the tip amount to apply', () => {
    render(<TipCalculator />);

    const tipButtonFive = screen.getByText('5%');
    expect(tipButtonFive).not.toHaveClass('selected');
    expect(tipButtonFive).toHaveClass('config__button');

    const tipButtonTen = screen.getByText('10%');

    fireEvent.click(tipButtonFive);
    expect(tipButtonFive).toHaveClass('selected');
    expect(tipButtonTen).not.toHaveClass('selected');

    fireEvent.click(tipButtonFive);
    fireEvent.click(tipButtonTen);
    expect(tipButtonTen).toHaveClass('selected');
    expect(tipButtonFive).not.toHaveClass('selected');
  });

  it('render the amounts per person if the user has filled all the fields', () => {
    render(<TipCalculator />);

    const tipPerPerson = screen.queryByTestId('tip-per-person');
    expect(tipPerPerson).toHaveTextContent('0€');

    const billPerPerson = screen.queryByTestId('bill-per-person');
    expect(billPerPerson).toHaveTextContent('0€');

    const billInput = screen.getByLabelText('Bill amount');
    fireEvent.change(billInput, { target: { value: 100 } });

    const peopleInput = screen.getByLabelText('People amount');
    fireEvent.change(peopleInput, { target: { value: 2 } });

    const tipButtonFive = screen.getByText('5%');
    fireEvent.click(tipButtonFive);

    expect(tipPerPerson).toHaveTextContent('2.5€');
    expect(billPerPerson).toHaveTextContent('52.5€');
  });

  it('reset all the values when user start a new calculation from scratch', () => {
    render(<TipCalculator />);

    const billInput = screen.getByLabelText('Bill amount');
    fireEvent.change(billInput, { target: { value: 100 } });
    expect(billInput).toHaveValue(100);

    const tipButtonFive = screen.getByText('5%');
    expect(tipButtonFive).not.toHaveClass('selected');
    fireEvent.click(tipButtonFive);

    const peopleInput = screen.getByLabelText('People amount');
    fireEvent.change(peopleInput, { target: { value: 2 } });
    expect(peopleInput).toHaveValue(2);

    const tipPerPerson = screen.queryByTestId('tip-per-person');
    expect(tipPerPerson).toHaveTextContent('2.5€');

    const billPerPerson = screen.queryByTestId('bill-per-person');
    expect(billPerPerson).toHaveTextContent('52.5€');

    const resetButton = screen.getByRole('button', { name: /Reset/i });
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(resetButton);

    expect(billInput).toHaveValue(0);
    expect(tipButtonFive).not.toHaveClass('selected');
    expect(peopleInput).toHaveValue(0);
    expect(tipPerPerson).toHaveTextContent('0€');
    expect(billPerPerson).toHaveTextContent('0€');
  });
});
