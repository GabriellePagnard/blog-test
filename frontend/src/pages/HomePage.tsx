const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6 pt-20">
      <div className="flex flex-col items-center w-full space-y-16 mt-24">
        <section className="w-full max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
            Bienvenue sur <span className="text-pink-400">Mon Blog</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Plongez dans des articles captivants, des idées inspirantes et des ressources uniques pour enrichir votre savoir.
          </p>
          <a
            href="/articles"
            className="mt-6 inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Explorer les Articles
          </a>
        </section>
        <section className="w-full max-w-4xl">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">
              Pourquoi lire <span className="text-pink-400">Mon Blog</span> ?
            </h3>
            <ul className="space-y-3 text-gray-100">
              <li>📝 Des articles rédigés par des experts.</li>
              <li>💡 Un contenu clair et accessible à tous.</li>
              <li>🔄 Des mises à jour régulières avec les dernières tendances.</li>
            </ul>
          </div>
        </section>
        <section className="w-full max-w-4xl">
          <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Restez informé des derniers articles</h3>
            <p className="text-gray-100 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les nouveautés directement dans votre boîte mail.
            </p>
            <form className="flex flex-col md:flex-row md:space-x-3 space-y-4 md:space-y-0">
              <input
                type="email"
                placeholder="Entrez votre email"
                required
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg shadow-md transition-all"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
