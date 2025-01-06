import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders HomePage without crashing', () => {
  render(<HomePage />);
  expect(screen.getByText('Bienvenue sur le Blog')).toBeInTheDocument();
  expect(screen.getByText("Voici la page d'accueil.")).toBeInTheDocument();
});
