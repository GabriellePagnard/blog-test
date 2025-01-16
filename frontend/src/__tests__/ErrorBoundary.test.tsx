import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

const ProblematicComponent = () => {
  throw new Error('Test Error');
};

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore(); // Restaurer console.error
});

test('displays error message when an error occurs', () => {
  render(
    <ErrorBoundary>
      <ProblematicComponent />
    </ErrorBoundary>
  );

  expect(screen.getByText(/Une erreur est survenue/i)).toBeInTheDocument();
});
