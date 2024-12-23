import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CarTaxiFrontIcon as Taxi, Ambulance, ShipWheelIcon as Wheelchair, Car } from "lucide-react";


const transportModes = [
  {
    title: "Taxi conventionné",
    description: "Transport confortable pour les patients autonomes",
    icon: Taxi,
  },
  {
    title: "VSL",
    description: "Véhicule Sanitaire Léger pour les patients semi-autonomes",
    icon: Car,
  },
  {
    title: "Ambulance",
    description: "Transport médicalisé pour les patients nécessitant une assistance complète",
    icon: Ambulance,
  },
  {
    title: "Transport PMR",
    description: "Transport adapté aux Personnes à Mobilité Réduite",
    icon: Wheelchair,
  },
];

const testimonials = [
  {
    name: "Jean Dupont",
    feedback: "Service rapide et efficace. J'ai réservé un transport en quelques minutes !",
    rating: 5,
  },
  {
    name: "Marie Lambert",
    feedback: "Les professionnels sont très sympathiques et ponctuels. Je recommande fortement !",
    rating: 5,
  },
  {
    name: "Luc Martin",
    feedback: "Excellent service, vraiment simple à utiliser et très pratique.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      <header className="w-full text-center py-32 bg-gradient-to-b from-blue-600 to-blue-50 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-7xl font-extrabold text-white drop-shadow-md">Vite Mon VSL</h1>
          <p className="mt-8 text-3xl text-gray-100">
            Simplifiez vos demandes de transport médicalisé en quelques clics
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="bg-blue-100 rounded-lg shadow-xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Demander un transport</h2>
          <p className="text-xl text-gray-700 mb-6">
            Indiquez votre lieu de départ et votre destination pour obtenir rapidement le transport adapté à vos besoins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Lieu de prise en charge</label>
              <input
                type="text"
                placeholder="Entrez une adresse ou un lieu"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Destination</label>
              <input
                type="text"
                placeholder="Entrez une adresse ou un lieu"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/request-transport">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg">
                Valider ma demande
              </Button>
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-12 mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Les services de transport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {transportModes.map((mode, index) => (
              <Link to="/request-transport" key={index}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      <mode.icon className="mr-2 h-8 w-8 text-blue-500" />
                      {mode.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{mode.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">Ce que disent nos utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {testimonial.feedback}
                  </CardDescription>
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}







