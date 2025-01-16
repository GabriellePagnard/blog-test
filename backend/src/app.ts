import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importer les routes
import authRoutes from "./routes/auth";
import articleRoutes from "./routes/articles";

app.use("/api/auth", authRoutes);
app.use("/api/articles", articleRoutes); 

export default app;