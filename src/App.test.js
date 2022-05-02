import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct intial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to MidnightBlue/i });
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
test('button has correct initial text', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to MidnightBlue/i });
  expect(button).toHaveTextContent(/change to MidnightBlue/i);
});
test('button turns MidnightBlue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to MidnightBlue/i });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(button).toHaveTextContent(/change to MediumVioletRed/i);
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /change to MidnightBlue/i });
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('checking and unchecking the box changes the buttond disabled attribute', () => {
  render(<App />);

  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: /change to MidnightBlue/i });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

test('button turns greay when disabled', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /change to MidnightBlue/i });
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
});
