import { render, screen, fireEvent } from '@testing-library/react';
import { BlogProvider, useBlogContext } from '../context/BlogContext';

const TestComponent = () => {
  const { darkMode, toggleDarkMode } = useBlogContext();
  return (
    <div>
      <p>{darkMode ? 'Mode Sombre' : 'Mode Clair'}</p>
      <button onClick={toggleDarkMode}>Toggle Mode</button>
    </div>
  );
};

test('toggles dark mode', () => {
  render(
    <BlogProvider>
      <TestComponent />
    </BlogProvider>
  );

  expect(screen.getByText(/Mode Clair/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Toggle Mode/i));
  expect(screen.getByText(/Mode Sombre/i)).toBeInTheDocument();
});