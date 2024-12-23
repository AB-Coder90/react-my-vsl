import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Titre principal */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center mt-20">
        À propos de notre plateforme
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Notre mission est de simplifier la mise en relation entre les patients et les professionnels du transport médical, tout en garantissant rapidité, efficacité et accessibilité.
      </p>

      {/* Section Objectif */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Notre objectif
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Notre plateforme est conçue pour répondre aux besoins spécifiques des patients nécessitant un transport médical :
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>Permettre une prise en charge rapide et simplifiée.</li>
          <li>Réduire les délais d'attente en connectant directement patients et professionnels.</li>
          <li>Soutenir les professionnels en leur offrant une solution intuitive pour gérer leurs missions.</li>
        </ul>
      </div>

      {/* Section Chiffres Clés */}
      <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-10">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Nos chiffres clés
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-4xl font-bold text-blue-600">500+</h4>
            <p className="text-gray-600">Professionnels inscrits</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600">1 200+</h4>
            <p className="text-gray-600">Demandes traitées</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600">98%</h4>
            <p className="text-gray-600">Taux de satisfaction</p>
          </div>
        </div>
      </div>

      {/* Section Schéma du fonctionnement */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Comment ça fonctionne ?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Notre solution repose sur un processus simple et efficace :
        </p>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
          <div className="text-center md:w-1/3">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h4 className="font-medium text-gray-700">Soumission de la demande</h4>
            <p className="text-gray-600">
              Le patient remplit un formulaire avec ses besoins spécifiques.
            </p>
          </div>
          <div className="text-center md:w-1/3">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h4 className="font-medium text-gray-700">Notification aux professionnels</h4>
            <p className="text-gray-600">
              Tous les transporteurs du département sont immédiatement notifiés.
            </p>
          </div>
          <div className="text-center md:w-1/3">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h4 className="font-medium text-gray-700">Prise en charge rapide</h4>
            <p className="text-gray-600">
              Le premier professionnel disponible accepte la mission et contacte le patient.
            </p>
          </div>
        </div>
      </div>

      {/* Section Pourquoi Nous */}
      <div className="bg-gray-50 rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          Pourquoi choisir notre plateforme ?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nous nous engageons à fournir une solution transparente, rapide et efficace pour répondre aux besoins de transport médical.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Accessible gratuitement pour tous les utilisateurs.</li>
          <li>Une approche respectueuse et centrée sur le patient.</li>
          <li>Une technologie conçue pour simplifier et optimiser chaque étape.</li>
        </ul>
      </div>

      {/* Appel à l'action */}
      <div className="text-center mt-12">
        <h4 className="text-lg font-medium text-blue-700 mb-4">
          Prêt à en savoir plus ?
        </h4>
        <p className="text-gray-700 mb-6">
          Découvrez comment notre plateforme peut simplifier vos démarches de transport médical dès aujourd'hui.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Découvrir nos services
        </Link>
        <p className="mt-6 text-gray-700">
          Vous avez des questions ?{" "}
          <Link
            to="/contact"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Contactez-nous
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutUs;


