import React, { useState } from "react";

const RequestTransport = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire (par exemple, envoi à un serveur)
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
        Formulaire de demande de transport
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-blue-800">Nom :</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 mt-2 border border-blue-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-800">Email :</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mt-2 border border-blue-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-blue-800">Message :</label>
          <textarea
            id="message"
            className="w-full p-2 mt-2 border border-blue-300 rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default RequestTransport;
