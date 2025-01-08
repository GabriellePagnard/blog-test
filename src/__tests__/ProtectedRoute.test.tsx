import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminPage from '../pages/AdminPage';
import { useAuth } from '../context/AuthContext';

jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

test('renders admin page if logged in', async () => {
  (useAuth as jest.Mock).mockReturnValue({ user: { name: 'Admin' }, isLoggedIn: true });

  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    );
  });

  expect(screen.getByRole('heading', { name: /administration/i })).toBeInTheDocument();
});
