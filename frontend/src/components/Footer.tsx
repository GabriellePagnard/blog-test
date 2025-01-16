const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Mentions légales et copyright */}
          <div className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Mon Blog. Tous droits réservés.{" "}
            <a href="/mentions-legales" className="hover:text-pink-500">
              Mentions légales
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  