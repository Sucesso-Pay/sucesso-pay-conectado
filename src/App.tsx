import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Distribuidor from "./pages/Distribuidor";
import WhiteLabel from "./pages/WhiteLabel";
import ContaDigital from "./pages/ContaDigital";
import Maquininhas from "./pages/Maquininhas";
import EstabelecimentoComercial from "./pages/EstabelecimentoComercial";
import PrestadorServicos from "./pages/PrestadorServicos";
import NotFound from "./pages/NotFound";
import VirtualAssistantPopup from "./components/VirtualAssistantPopup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <VirtualAssistantPopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/distribuidor" element={<Distribuidor />} />
          <Route path="/whitelabel" element={<WhiteLabel />} />
          <Route path="/conta-digital" element={<ContaDigital />} />
          <Route path="/maquininhas" element={<Maquininhas />} />
          <Route path="/estabelecimento-comercial" element={<EstabelecimentoComercial />} />
          <Route path="/prestador-servicos" element={<PrestadorServicos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
