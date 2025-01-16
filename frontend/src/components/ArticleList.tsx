type Article = {
    id: number;
    title: string;
    summary: string;
  };
  
  const ArticleList = ({ articles }: { articles: Article[] }) => {
    return (
      <div>
        <h2>Liste des Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ArticleList;