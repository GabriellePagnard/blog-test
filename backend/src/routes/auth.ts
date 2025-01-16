import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController";

const router = Router();

// Définir les routes pour l'inscription et la connexion
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
