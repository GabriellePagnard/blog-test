import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

test('renders a list of articles', () => {
  const articles = [
    { id: 1, title: 'Article 1', summary: "Résumé de l'article 1" },
    { id: 2, title: 'Article 2', summary: "Résumé de l'article 2" },
  ];

  render(<ArticleList articles={articles} />);

  // Vérifie le titre du premier article
  const firstArticleTitle = screen.getByText(/Article 1/i, { selector: 'h3' });
  expect(firstArticleTitle).toBeInTheDocument();

  // Vérifie le résumé du premier article
  const firstArticleSummary = screen.getByText(/Résumé de l'article 1/i);
  expect(firstArticleSummary).toBeInTheDocument();

  // Vérifie le titre du second article
  const secondArticleTitle = screen.getByText(/Article 2/i, { selector: 'h3' });
  expect(secondArticleTitle).toBeInTheDocument();

  // Vérifie le résumé du second article
  const secondArticleSummary = screen.getByText(/Résumé de l'article 2/i);
  expect(secondArticleSummary).toBeInTheDocument();
});