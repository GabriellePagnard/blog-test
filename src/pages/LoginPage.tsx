const LoginPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted'); // Vous pouvez ajouter plus de logique ici
  };

  return (
    <div className="pt-20">
      <form onSubmit={handleSubmit} className="p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">Nom d'utilisateur</label>
          <input type="text" id="username" className="w-full p-2 border rounded text-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Mot de passe</label>
          <input type="password" id="password" className="w-full p-2 border rounded text-black" />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
