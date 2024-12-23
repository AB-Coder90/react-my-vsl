import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Ajout de mt-20 pour descendre le titre */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center mt-20">
        Simplifiez vos démarches de transport médical
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Notre plateforme vous met en relation rapidement et efficacement avec 
        les professionnels du transport médical. Nous aidons les patients à trouver 
        le service le mieux adapté à leurs besoins.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Taxis médicaux */}
        <div className="border rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Taxis médicaux
          </h3>
          <p className="text-gray-600 mb-4">
            Les taxis médicaux assurent des trajets pour des consultations ou des rendez-vous réguliers. 
            Professionnels agréés, ils garantissent confort et discrétion pour vos déplacements médicaux.
          </p>
        </div>
        {/* Véhicules Sanitaires Légers (VSL) */}
        <div className="border rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Véhicules Sanitaires Légers (VSL)
          </h3>
          <p className="text-gray-600 mb-4">
            Les VSL sont adaptés pour transporter des patients en position assise, 
            nécessitant un accompagnement personnalisé et un environnement sécurisé.
          </p>
        </div>
        {/* Ambulances médicalisées */}
        <div className="border rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Ambulances médicalisées
          </h3>
          <p className="text-gray-600 mb-4">
            Les ambulances sont équipées pour prendre en charge des patients nécessitant 
            une assistance médicale ou un transport en position allongée.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h4 className="text-lg font-medium text-blue-700 mb-4">
          Pourquoi utiliser notre service ?
        </h4>
        <p className="text-gray-700 mb-4">
          Grâce à notre plateforme, une demande de transport est automatiquement envoyée 
          à tous les professionnels de votre département. Le premier à répondre accepte la mission, 
          vous garantissant une prise en charge rapide et simplifiée.
        </p>
        <p className="text-gray-700">
          Si vous avez des questions ou des besoins spécifiques,{" "}
          <Link
            to="/contact"
            className="text-blue-600 underline hover:text-blue-800"
          >
            contactez-nous
          </Link>
          . Nous sommes là pour vous aider.
        </p>
      </div>
    </div>
  );
};

export default Services;


