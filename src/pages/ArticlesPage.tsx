import ArticleList from '../components/ArticleList';

const ArticlesPage = () => {
  const articles = [
    { id: 1, title: 'Article 1', summary: 'Résumé de l\'article 1' },
    { id: 2, title: 'Article 2', summary: 'Résumé de l\'article 2' },
  ];

  return (
    <div>
      <h1>Tous les Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticlesPage;