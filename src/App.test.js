import { render, screen } from '@testing-library/react';
import App from './App';

test('Page title exists', () => {
  render(<App />);
  const pageTitleElement = screen.getByText(/Welcome to the bank/i);
  expect(pageTitleElement).toBeInTheDocument();
});

test('Hero image exists', async () => {
  render(<App />);
  const heroImage = screen.getByAltText('Hero image');
  expect(heroImage.src).toContain('bank.png');
});
