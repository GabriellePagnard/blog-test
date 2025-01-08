import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders HomePage without crashing', async () => {
  await act(async () => {
    render(<HomePage />);
  });

  expect(screen.getByText((content, element) => {
    return element?.textContent === 'Bienvenue sur Mon Blog';
  })).toBeInTheDocument();

  expect(screen.getByText(/Plongez dans des articles captivants/i)).toBeInTheDocument();
});
