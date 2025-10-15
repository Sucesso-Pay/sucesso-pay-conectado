import { Link } from "react-router-dom";
import simboloFooter from "@/assets/simbolo-footer.png";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Símbolo da Marca */}
          <div className="col-span-1 md:col-span-2 flex items-center">
            <img src={simboloFooter} alt="Sucesso Pay Symbol" className="h-32 opacity-60" />
          </div>

          {/* Links Rápidos */}
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
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Maquininha
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
                <span>contato@sucessopay.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>0800 123 4567</span>
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
