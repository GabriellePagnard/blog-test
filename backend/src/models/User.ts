import mongoose, { Schema, Document, Model } from "mongoose";

// Définition de l'interface pour un utilisateur
interface IUser extends Document {
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Définition du schéma utilisateur
const UserSchema: Schema<IUser> = new Schema(
  {
    username: { 
      type: String, 
      required: [true, "Username is required"], 
      unique: true, 
      trim: true, 
      minlength: [3, "Username must be at least 3 characters long"]
    },
    password: { 
      type: String, 
      required: [true, "Password is required"], 
      minlength: [6, "Password must be at least 6 characters long"]
    },
  },
  {
    timestamps: true, // Ajoute createdAt et updatedAt automatiquement
  }
);

// Création et exportation du modèle
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
