import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Services from "./page/Services";
import RequestTransport from "./page/RequestTransport";
import AboutUs from "./page/AboutUs";
import Contact from "./page/Contact";
import './App.css'


const App = () => {
  return (
    <Router>
      <div className="w-full">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/request-transport" element={<RequestTransport />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-blue-600 text-white py-4 text-center">
          © 2024 Vite Mon VSL. Tous droits réservés.
        </footer>
      </div>
    </Router>
  );
};

export default App;


