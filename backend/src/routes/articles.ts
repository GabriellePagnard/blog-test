import express from "express";
import {
  getAllArticles,
  createArticle,
  deleteArticle,
} from "../controllers/articleController";

const router = express.Router();

// Récupérer tous les articles
router.get("/", getAllArticles);

// Créer un nouvel article
router.post("/", createArticle);

// Supprimer un article
router.delete("/:id", deleteArticle);

export default router;