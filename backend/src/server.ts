import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/blog";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("DB connection error:", err));
