import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${name}, votre message a été envoyé !`);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Ajout de mt-20 pour descendre le titre */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center mt-20">
        Contactez-nous
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Vous avez une question ou besoin d’assistance ? Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
      </p>
      <form
        className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Champ Nom */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez votre nom"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tapez votre message ici"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>

        {/* Bouton Envoyer */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
