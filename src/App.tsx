import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assurez-vous que cette ligne est correcte
import Footer from './components/Footer'; // Importation correcte pour Footer
import ProtectedRoute from './components/ProtectedRoute'; // Importation correcte pour ProtectedRoute
import { Suspense, lazy } from 'react';

// Lazy loading des pages pour optimisation
const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const LazyNotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LazyLoginPage = lazy(() => import('./pages/LoginPage'));
const LazyAdminPage = lazy(() => import('./pages/AdminPage'));

const App = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ marginTop: '4rem' }}>
      <Navbar /> {/* Utilisation correcte de Navbar */}
      
      <Suspense fallback={<div className="text-center mt-10 text-gray-500">Chargement en cours...</div>}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/articles" element={<LazyArticlesPage />} />
          <Route path="/login" element={<LazyLoginPage />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <LazyAdminPage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
