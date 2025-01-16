import { Request, Response } from "express";
import Article from "../models/Article";

// Obtenir tous les articles
export const getAllArticles = async (req: Request, res: Response) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des articles." });
  }
};

// Créer un nouvel article
export const createArticle = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const newArticle = new Article({ title, content });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de l'article." });
  }
};

// Supprimer un article
export const deleteArticle = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: "Article supprimé avec succès." });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression de l'article." });
  }
};