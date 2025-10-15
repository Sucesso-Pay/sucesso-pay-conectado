import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolucoesOpen, setIsSolucoesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sucesso Pay" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-primary font-medium inline-flex items-center gap-1 transition-colors">
                Soluções
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[550px] p-4 bg-background">
                <DropdownMenuItem asChild className="cursor-pointer mb-2">
                  <Link to="/" className="grid grid-cols-[140px_1fr] gap-4 p-4 rounded-md hover:bg-accent transition-colors">
                    <div className="text-sm font-semibold leading-relaxed text-left">
                      Gestão<br/>Financeira
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground text-right">
                      Controle completo das finanças do seu negócio
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer mb-2">
                  <Link to="/conta-digital" className="grid grid-cols-[140px_1fr] gap-4 p-4 rounded-md hover:bg-accent transition-colors">
                    <div className="text-sm font-semibold leading-relaxed text-left">
                      Conta<br/>Digital
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground text-right">
                      Gerencie transações, recebíveis e pagamentos
                    </p>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/maquininhas" className="grid grid-cols-[140px_1fr] gap-4 p-4 rounded-md hover:bg-accent transition-colors">
                    <div className="text-sm font-semibold leading-relaxed text-left">Maquininha</div>
                    <p className="text-sm leading-relaxed text-muted-foreground text-right">
                      Equipamentos rápidos, resistentes e fáceis de operar
                    </p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/distribuidor" className="text-foreground hover:text-primary transition-colors font-medium">
              Quero ser Distribuidor
            </Link>
            <Link to="/whitelabel" className="text-foreground hover:text-primary transition-colors font-medium">
              Quero ter Minha Marca
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Collapsible open={isSolucoesOpen} onOpenChange={setIsSolucoesOpen}>
                <CollapsibleTrigger className="text-foreground hover:text-primary transition-colors font-medium py-2 flex items-center justify-between w-full">
                  Soluções
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSolucoesOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col gap-2 mt-2">
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
                </CollapsibleContent>
              </Collapsible>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
