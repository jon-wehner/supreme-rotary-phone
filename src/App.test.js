import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct intial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /change to blue/i});
  expect(button).toHaveStyle({ backgroundColor: 'red' });
});
test('button has correct initial text', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /change to blue/i});
  expect(button).toHaveTextContent(/change to blue/i);
});
test('button turns blue when clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: /change to blue/i})
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue'});
  expect(button).toHaveTextContent(/change to red/i);
});

test('initial conditions', () => {
  render(<App />);
  
  const colorButton = screen.getByRole('button', { name: /change to blue/i});
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

})