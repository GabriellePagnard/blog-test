import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, FutureConfig } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const future: FutureConfig = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={future}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);