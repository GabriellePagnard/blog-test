import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
  expect(screen.getByText(/Articles/i)).toBeInTheDocument();
});