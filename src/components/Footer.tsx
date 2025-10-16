import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.svg";
import { Mail, Phone, MapPin, Headphones } from "lucide-react";
import { useVirtualAssistant } from "@/contexts/VirtualAssistantContext";

export const Footer = () => {
  const { openAssistant } = useVirtualAssistant();

  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Sucesso Pay */}
          <div className="col-span-1 md:col-span-2 flex items-start">
            <img src={logoFooter} alt="Sucesso Pay" className="h-20 md:h-24" />
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
          <div>
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
              <li>
                <button
                  onClick={openAssistant}
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                >
                  <Headphones className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="underline">Suporte Técnico</span>
                </button>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Sucesso Pay. Todos os direitos reservados.</p>
          <p className="mt-2">Conta Digital Autorizada pelo Banco Central</p>
        </div>
      </div>
    </footer>
  );
};
