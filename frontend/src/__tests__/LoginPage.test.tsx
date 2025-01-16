import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';
import { AuthProvider } from '../context/AuthContext'; // Importer AuthProvider

test('renders login page correctly', () => {
  render(
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );

  expect(screen.getByText(/Connexion/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Nom d'utilisateur/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Mot de passe/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Se connecter/i })).toBeInTheDocument();
});
