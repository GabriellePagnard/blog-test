import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { username, password });
      console.log("Token:", response.data.token);
      alert("Connexion réussie !");
    } catch (error: any) {
      setError(error.response?.data?.error || "Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="pt-20">
      <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>
        {error && <div className="mb-4 text-red-500 bg-red-100 p-2 rounded">{error}</div>}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
