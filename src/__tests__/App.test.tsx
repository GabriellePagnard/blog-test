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
    expect(screen.getByRole('heading', { name: /Bienvenue sur le Blog/i })).toBeInTheDocument();
    expect(screen.getByText(/Voici la page d'accueil./i)).toBeInTheDocument();
  });

  test('renders articles page when visiting /articles', () => {
    render(
      <MemoryRouter initialEntries={['/articles']}>
        <App />
      </MemoryRouter>
    );
    // Vérifie le titre principal de la page des articles
    expect(screen.getByRole('heading', { name: /Tous les Articles/i })).toBeInTheDocument();
    // Vérifie la sous-section "Liste des Articles"
    expect(screen.getByRole('heading', { name: /Liste des Articles/i })).toBeInTheDocument();
  });

  test('renders not found page for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
    expect(screen.getByText(/Page non trouvée./i)).toBeInTheDocument();
  });
});
