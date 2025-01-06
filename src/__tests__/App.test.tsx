import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App routing', () => {
  test('renders home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    // Vérifie que le texte attendu sur la page d'accueil est présent
    expect(screen.getByRole('heading', { name: /Bienvenue sur le Blog/i })).toBeInTheDocument();
    expect(screen.getByText(/Voici la page d'accueil./i)).toBeInTheDocument();
  });

  test('renders articles page when visiting /articles', () => {
    render(
      <MemoryRouter initialEntries={['/articles']}>
        <App />
      </MemoryRouter>
    );
    // Vérifie que le texte attendu sur la page des articles est présent
    expect(screen.getByRole('heading', { name: /Tous les Articles/i })).toBeInTheDocument();
    expect(screen.getByText(/Liste des articles./i)).toBeInTheDocument();
  });

  test('renders not found page for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    // Vérifie que la page 404 s'affiche pour une route inconnue
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
    expect(screen.getByText(/Page non trouvée./i)).toBeInTheDocument();
  });
});
