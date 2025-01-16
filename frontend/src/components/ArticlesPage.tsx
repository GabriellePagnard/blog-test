import { useEffect, useState } from "react";
import axios from "axios";

type Article = {
  _id: string;
  title: string;
  content: string;
};

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id} className="mb-4">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;