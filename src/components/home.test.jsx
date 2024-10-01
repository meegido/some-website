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

    const billInput = screen.getByLabelText('Bill amount');

    fireEvent.change(billInput, { target: { value: '100' } });

    expect(billInput.value).toBe('100');
  });

  it('should update the person amount', () => {
    render(<Home />);
    const peopleInput = screen.getByLabelText('People amount');
    fireEvent.change(peopleInput, { target: { value: 5 } });

    expect(peopleInput).toHaveValue(5);
  });

  it('should render the options for the tip', () => {
    render(<Home />);
    const tipOptions = screen.getAllByLabelText('Tip button');
    expect(tipOptions.length).toBe(6);
  });

  it('should select the tip amouont', () => {
    render(<Home />);

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

  it('should render the amounts per person if the user has filled all the fields', () => {
    render(<Home />);

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

  it('should reset the values', () => {
    render(<Home />);

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
