const AdminPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Administration</h1>
      <p>Bienvenue dans l’espace d’administration.</p>
      {/* Section pour les fonctionnalités */}
      <div className="mt-6 space-y-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Ajouter un article
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Modifier un article
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Supprimer un article
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
