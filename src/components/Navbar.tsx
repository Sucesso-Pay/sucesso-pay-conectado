import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Gestão Financeira</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Controle completo das finanças do seu negócio
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/conta-digital"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Conta Digital</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Gerencie transações, recebíveis e pagamentos
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Maquininha</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Aceite pagamentos em qualquer lugar
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              <div className="flex flex-col gap-2">
                <p className="text-foreground font-medium py-2 text-sm text-muted-foreground uppercase tracking-wider">
                  Soluções
                </p>
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  Gestão Financeira
                </Link>
                <Link
                  to="/conta-digital"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  Conta Digital
                </Link>
                <Link
                  to="/"
                  className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  Maquininha
                </Link>
              </div>
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
