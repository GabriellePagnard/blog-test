import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { BlogProvider } from '../context/BlogContext';

test('renders navigation links', () => {
  render(
    <BlogProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </BlogProvider>
  );
});
