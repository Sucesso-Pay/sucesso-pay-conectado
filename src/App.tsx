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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/distribuidor" element={<Distribuidor />} />
          <Route path="/whitelabel" element={<WhiteLabel />} />
          <Route path="/conta-digital" element={<ContaDigital />} />
          <Route path="/maquininhas" element={<Maquininhas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
