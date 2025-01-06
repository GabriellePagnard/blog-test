import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <BlogProvider>
          <App />
        </BlogProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
