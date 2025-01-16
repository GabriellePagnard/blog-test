import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

// Fonction pour enregistrer un utilisateur
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Vérification des champs requis
    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    // Vérification si l'utilisateur existe déjà
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    // Hashage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    // Sauvegarde du nouvel utilisateur
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Fonction pour connecter un utilisateur
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Vérification des champs requis
    if (!username || !password) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    // Recherche de l'utilisateur dans la base de données
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ error: "Invalid credentials" });
      return;
    }

    // Génération du token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
