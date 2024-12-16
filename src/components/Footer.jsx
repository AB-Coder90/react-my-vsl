import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mon-VSL. Tous droits réservés.
        </p>
        <p className="text-sm">
          Site créé à des fins d'utilité publique. Développeur : 
          <a href="mailto:votreemail@example.com" className="underline">Votre Nom</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

