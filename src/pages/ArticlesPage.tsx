const ArticlesPage = () => {
  const articles = [
    { id: 1, title: 'Article 1', summary: 'Résumé de l\'article 1' },
    { id: 2, title: 'Article 2', summary: 'Résumé de l\'article 2' },
    { id: 3, title: 'Article 3', summary: 'Résumé de l\'article 3' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white px-6 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          Tous les Articles
        </h1>
        <p className="text-lg">
          Découvrez nos derniers articles, idées et réflexions.
        </p>
      </header>

      {/* Articles Section */}
      <main className="w-full max-w-4xl space-y-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700">{article.summary}</p>
            <a
              href={`/articles/${article.id}`}
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-pink-500 font-medium rounded-md shadow hover:bg-indigo-700 transition duration-300"
            >
              Lire plus
            </a>
          </article>
        ))}
      </main>

      {/* Call-to-Action */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
        <p className="text-center text-lg mb-6">
          Restez informé des derniers articles et tendances.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Entrez votre email"
            className="px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-pink-500 text-pink-500 font-medium rounded-md shadow hover:bg-pink-600 transition duration-300"
          >
            S'inscrire
          </button>
        </form>
      </section>
    </div>
  );
};

export default ArticlesPage;
