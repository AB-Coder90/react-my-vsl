import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      {/* Section 1 : Informations générales */}
      <div>
        <h4 className="text-lg font-semibold mb-4">À propos de Mon-VSL</h4>
        <p className="text-sm text-gray-300">
          Mon-VSL est une plateforme dédiée à simplifier les demandes de transport médicalisé, créée pour faciliter la mise en relation entre patients et transporteurs.
        </p>
      </div>

      {/* Section 2 : Liens utiles */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Liens utiles</h4>
        <ul className="space-y-2">
          <li>
            <a href="https://www.ameli.fr/" target="_blank" rel="noopener noreferrer" className="underline text-sm text-gray-300 hover:text-white">
              Site officiel de la CNAM
            </a>
          </li>
          <li>
            <a href="/mentions-legales" className="underline text-sm text-gray-300 hover:text-white">
              Mentions légales
            </a>
          </li>
          <li>
            <a href="/contact" className="underline text-sm text-gray-300 hover:text-white">
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>

      {/* Section 3 : Développeur */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Développeur</h4>
        <p className="text-sm text-gray-300">
          Ce site a été conçu et développé par :
        </p>
        <p className="text-sm text-gray-300">
          <a href="mailto:votreemail@example.com" className="underline hover:text-white">
            Votre Nom
          </a>
        </p>
        <p className="text-sm text-gray-300 mt-4">
          Si vous avez des suggestions ou des questions, n'hésitez pas à nous contacter.
        </p>
      </div>
    </div>

    {/* Bas de page */}
    <div className="mt-8 border-t border-gray-700 pt-4 text-center">
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Mon-VSL. Tous droits réservés.
      </p>
      <p className="text-xs text-gray-400">
        Ce site est à but non lucratif, créé pour l'utilité publique.
      </p>
    </div>
  </footer>
  );
};

export default Footer;

