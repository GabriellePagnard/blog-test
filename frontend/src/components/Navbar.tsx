import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg z-50 h-16 mb-1">
      <div className="container mx-auto flex justify-center items-center py-4">
        <ul className="flex space-x-8 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Connexion
            </Link>
          </li>
          <li>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 hover:shadow-lg transition-all duration-300">
              Mode Sombre
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
