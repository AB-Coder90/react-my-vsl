import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-blue-800">
      {/* Navbar */}
      <Navbar />
      
      {/* Contenu principal */}
      <main className="flex-grow p-6 mx-auto max-w-7xl">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;


  