import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"  // Adjusted color here
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blue-800 text-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo et titre */}
        <Link to="/" className="flex items-center gap-2">
          <PlusIcon className="h-8 w-8 text-white" />
          <span className="text-xl font-semibold">Mon-VSL</span>
        </Link>

        {/* Menu Hamburger pour mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden border-2 border-white text-white rounded-full">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-blue-800 text-white w-64">
            <div className="grid gap-4 py-6 px-4">
              <Link to="/" className="text-lg font-semibold hover:underline">
                Accueil
              </Link>
              <Link to="/about-us" className="text-lg font-semibold hover:underline">
                À propos de nous
              </Link>
              <Link to="/services" className="text-lg font-semibold hover:underline">
                Services
              </Link>
              <Link to="/contact" className="text-lg font-semibold hover:underline">
                Contact
              </Link>
              <Link to="/request-transport" className="text-lg font-semibold hover:underline">
                Demander un transport
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex gap-6">
          <Link to="/" className="text-sm font-medium px-4 py-2 hover:bg-blue-700 rounded-md">
            Accueil
          </Link>
          <Link to="/about-us" className="text-sm font-medium px-4 py-2 hover:bg-blue-700 rounded-md">
            À propos de nous
          </Link>
          <Link to="/services" className="text-sm font-medium px-4 py-2 hover:bg-blue-700 rounded-md">
            Services
          </Link>
          <Link to="/contact" className="text-sm font-medium px-4 py-2 hover:bg-blue-700 rounded-md">
            Contact
          </Link>
          <Link to="/request-transport" className="text-sm font-medium px-4 py-2 text-blue-800 bg-white hover:bg-gray-200 rounded-md">
            Demander un transport
          </Link>
        </nav>
      </div>
    </header>
  );
}
