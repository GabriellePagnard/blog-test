import { Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useBlogContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <button onClick={toggleDarkMode}>
            {darkMode ? 'Mode Clair' : 'Mode Sombre'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;