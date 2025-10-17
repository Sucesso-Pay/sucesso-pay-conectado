import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Headphones } from "lucide-react";
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
import { useVirtualAssistant } from "@/contexts/VirtualAssistantContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolucoesOpen, setIsSolucoesOpen] = useState(false);
  const [isSegmentosOpen, setIsSegmentosOpen] = useState(false);
  const [isSolucoesDropdownOpen, setIsSolucoesDropdownOpen] = useState(false);
  const [isSegmentosDropdownOpen, setIsSegmentosDropdownOpen] = useState(false);
  const { openAssistant } = useVirtualAssistant();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sucesso Pay" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <div 
              className="relative"
              onMouseEnter={() => setIsSolucoesDropdownOpen(true)}
              onMouseLeave={() => setIsSolucoesDropdownOpen(false)}
            >
              <DropdownMenu open={isSolucoesDropdownOpen} onOpenChange={setIsSolucoesDropdownOpen}>
                <DropdownMenuTrigger className="text-foreground hover:text-primary text-xl font-bold inline-flex items-center gap-1 transition-colors px-4 py-2 rounded-md hover:bg-accent/50 border border-border">
                  Soluções
                  <ChevronDown className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[500px] p-4 bg-background z-50">
                  <DropdownMenuItem asChild className="cursor-pointer mb-2">
                    <Link to="/" className="grid grid-cols-[110px_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">
                        Gestão<br/>Financeira
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Soluções para eficiência financeira
                      </p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer mb-2">
                    <Link to="/conta-digital" className="grid grid-cols-[110px_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">
                        Conta<br/>Digital
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Gerencie transações, recebíveis e pagamentos
                      </p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/maquininhas" className="grid grid-cols-[110px_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">Maquininhas</div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Rápidas, resistentes e fáceis de operar
                      </p>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsSegmentosDropdownOpen(true)}
              onMouseLeave={() => setIsSegmentosDropdownOpen(false)}
            >
              <DropdownMenu open={isSegmentosDropdownOpen} onOpenChange={setIsSegmentosDropdownOpen}>
                <DropdownMenuTrigger className="text-foreground hover:text-primary text-xl font-bold inline-flex items-center gap-1 transition-colors px-4 py-2 rounded-md hover:bg-accent/50 border border-border">
                  Segmentos
                  <ChevronDown className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[500px] p-4 bg-background z-50">
                  <DropdownMenuItem asChild className="cursor-pointer mb-2">
                    <Link to="/estabelecimento-comercial" className="grid grid-cols-[auto_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">
                        Sou um estabelecimento<br/>comercial
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Soluções financeiras para sua empresa
                      </p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer mb-2">
                    <Link to="/prestador-servicos" className="grid grid-cols-[auto_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">
                        Sou um prestador<br/>de serviços
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Ferramentas para profissionais autônomos
                      </p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer mb-2">
                    <Link to="/distribuidor" className="grid grid-cols-[auto_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">
                        Quero ser<br/>distribuidor
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Seja parceiro e expanda seu negócio
                      </p>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/whitelabel" className="grid grid-cols-[auto_1fr] gap-3 p-4 rounded-md hover:bg-accent transition-colors group">
                      <div className="text-sm font-semibold leading-relaxed text-left">
                        Quero ter<br/>minha marca
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white transition-colors text-right">
                        Crie sua própria marca de pagamentos
                      </p>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button
              onClick={openAssistant}
              className="bg-primary/20 text-primary hover:bg-primary/30 font-bold text-lg px-6 border-0"
            >
              <Headphones className="mr-2 h-5 w-5" />
              Atendimento
            </Button>
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
                    to="/maquininhas"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Maquininhas
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible open={isSegmentosOpen} onOpenChange={setIsSegmentosOpen}>
                <CollapsibleTrigger className="text-foreground hover:text-primary transition-colors font-medium py-2 flex items-center justify-between w-full">
                  Segmentos
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSegmentosOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col gap-2 mt-2">
                  <Link
                    to="/estabelecimento-comercial"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Sou um estabelecimento comercial
                  </Link>
                  <Link
                    to="/prestador-servicos"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Sou um prestador de serviços
                  </Link>
                  <Link
                    to="/distribuidor"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Quero ser distribuidor
                  </Link>
                  <Link
                    to="/whitelabel"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Quero ter minha marca
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Button
                onClick={() => {
                  openAssistant();
                  setIsOpen(false);
                }}
                className="bg-primary/20 text-primary hover:bg-primary/30 font-bold w-full justify-start px-4 border-0"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Atendimento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
