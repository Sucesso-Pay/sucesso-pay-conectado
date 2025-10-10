import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sucesso Pay" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Soluções
            </Link>
            <Link to="/distribuidor" className="text-foreground hover:text-primary transition-colors font-medium">
              Quero ser Distribuidor
            </Link>
            <Link to="/whitelabel" className="text-foreground hover:text-primary transition-colors font-medium">
              Quero ter Minha Marca
            </Link>
            <Button variant="default" size="lg" className="font-semibold">
              Abrir Minha Conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Soluções
              </Link>
              <Link
                to="/distribuidor"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Quero ser Distribuidor
              </Link>
              <Link
                to="/whitelabel"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Quero ter Minha Marca
              </Link>
              <Button variant="default" size="lg" className="font-semibold w-full">
                Abrir Minha Conta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
