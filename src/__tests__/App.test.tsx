import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { BlogProvider } from '../context/BlogContext';

test('renders home page by default', () => {
  render(
    <BlogProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </BlogProvider>
  );
});

test('renders articles page when visiting /articles', () => {
  render(
    <BlogProvider>
      <MemoryRouter initialEntries={['/articles']}>
        <App />
      </MemoryRouter>
    </BlogProvider>
  );
});

test('renders not found page for an unknown route', () => {
  render(
    <BlogProvider>
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    </BlogProvider>
  );
});
