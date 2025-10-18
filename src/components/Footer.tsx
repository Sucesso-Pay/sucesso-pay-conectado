import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.svg";
import { Mail, Phone, MapPin, Headphones } from "lucide-react";
import { useVirtualAssistant } from "@/contexts/VirtualAssistantContext";

export const Footer = () => {
  const { openAssistant } = useVirtualAssistant();

  return (
    <footer className="bg-primary">
      <div className="container py-12">
        {/* Grid de conteúdo - Mobile e Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-8">
          {/* Logo - Apenas Mobile e Desktop */}
          <div className="col-span-1 md:hidden lg:block lg:col-span-2 flex items-start">
            <img src={logoFooter} alt="Sucesso Pay" className="h-20 lg:h-24" />
          </div>

          {/* Soluções */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Soluções</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Gestão Financeira
                </Link>
              </li>
              <li>
                <Link to="/conta-digital" className="text-white/80 hover:text-white transition-colors text-sm">
                  Conta Digital
                </Link>
              </li>
              <li>
                <Link to="/maquininhas" className="text-white/80 hover:text-white transition-colors text-sm">
                  Maquininhas
                </Link>
              </li>
            </ul>
          </div>

          {/* Segmentos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Segmentos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/estabelecimento-comercial" className="text-white/80 hover:text-white transition-colors text-sm">
                  Estabelecimento Comercial
                </Link>
              </li>
              <li>
                <Link to="/prestador-servicos" className="text-white/80 hover:text-white transition-colors text-sm">
                  Prestador de Serviços
                </Link>
              </li>
              <li>
                <Link to="/distribuidor" className="text-white/80 hover:text-white transition-colors text-sm">
                  Seja Distribuidor
                </Link>
              </li>
              <li>
                <Link to="/whitelabel" className="text-white/80 hover:text-white transition-colors text-sm">
                  WhiteLabel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">contato@sucessopay.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Headphones className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <button
                  onClick={openAssistant}
                  className="text-white/80 hover:text-white transition-colors underline text-left"
                >
                  Suporte Técnico
                </button>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Área de Copyright - Diferentes layouts por breakpoint */}
        {/* Mobile: Centralizado */}
        <div className="md:hidden border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Sucesso Pay. Todos os direitos reservados.</p>
          <p className="mt-2">Conta Digital Autorizada pelo Banco Central</p>
        </div>

        {/* Tablet: Logo à esquerda, texto à direita */}
        <div className="hidden md:flex lg:hidden border-t border-white/20 mt-8 pt-8 justify-between items-center">
          <img src={logoFooter} alt="Sucesso Pay" className="h-16" />
          <div className="text-right text-sm text-white/80">
            <p>© {new Date().getFullYear()} Sucesso Pay. Todos os direitos reservados.</p>
            <p className="mt-2">Conta Digital Autorizada pelo Banco Central</p>
          </div>
        </div>

        {/* Desktop: Centralizado */}
        <div className="hidden lg:block border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Sucesso Pay. Todos os direitos reservados.</p>
          <p className="mt-2">Conta Digital Autorizada pelo Banco Central</p>
        </div>
      </div>
    </footer>
  );
};
