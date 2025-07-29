import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stock Tracker header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Stock Tracker/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Fetch button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Fetch/i);
  expect(buttonElement).toBeInTheDocument();
});