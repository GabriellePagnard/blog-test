import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Importation du Footer
import { Suspense, lazy } from 'react';

// Lazy loading des pages pour une optimisation des performances
const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const LazyNotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Routes avec Suspense pour gestion du chargement */}
      <Suspense fallback={<div className="text-center mt-10 text-gray-500">Chargement en cours...</div>}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/articles" element={<LazyArticlesPage />} />
          <Route path="*" element={<LazyNotFoundPage />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
