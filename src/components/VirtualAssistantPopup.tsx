import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Headphones } from "lucide-react";
import virtualAssistant from "@/assets/virtual-assistant.png";
import ContactFormModal from "./ContactFormModal";

const VirtualAssistantPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Texto de apresentação - EDITE AQUI
  const welcomeMessage = "Olá! Precisa de ajuda? Estou aqui para atender você!";
  
  // Número do WhatsApp de Suporte - EDITE AQUI
  const supportWhatsappNumber = "5511999999999"; // Formato: código do país + DDD + número

  useEffect(() => {
    if (hasShown) return;

    let inactivityTimer: NodeJS.Timeout;
    let mouseMovementTimer: NodeJS.Timeout;

    // Detectar inatividade do mouse (30 segundos)
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      if (!hasShown) {
        inactivityTimer = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 30000); // 30 segundos
      }
    };

    // Detectar tentativa de sair da página
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Iniciar timer de inatividade
    resetInactivityTimer();
    document.addEventListener("mousemove", resetInactivityTimer);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(inactivityTimer);
      clearTimeout(mouseMovementTimer);
      document.removeEventListener("mousemove", resetInactivityTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleCommercialClick = () => {
    setIsOpen(false);
    setIsContactFormOpen(true);
  };

  const handleSupportClick = () => {
    const message = encodeURIComponent("Olá! Sou cliente e preciso de suporte.");
    window.open(`https://wa.me/${supportWhatsappNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="max-w-lg p-0 gap-0 border-none bg-transparent shadow-none"
          hideCloseButton
        >
          <div className="relative bg-card rounded-lg shadow-2xl overflow-hidden animate-scale-in">
            {/* Botão de fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Conteúdo */}
            <div className="p-8">
              {/* Imagem do atendente - MAIOR */}
              <div className="flex justify-center mb-6">
                <img
                  src={virtualAssistant}
                  alt="Atendente Virtual Sucesso Pay"
                  className="w-64 h-64 object-contain"
                />
              </div>

              {/* Texto de apresentação */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Atendimento Sucesso Pay
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {welcomeMessage}
                </p>

                {/* Botões de ação */}
                <div className="space-y-3 pt-4">
                  <Button
                    onClick={handleCommercialClick}
                    size="lg"
                    className="w-full text-base h-12"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Assuntos Comerciais
                  </Button>
                  
                  <Button
                    onClick={handleSupportClick}
                    variant="outline"
                    size="lg"
                    className="w-full text-base h-12"
                  >
                    <Headphones className="mr-2 h-5 w-5" />
                    Já sou cliente e preciso de suporte
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Formulário de Contato */}
      <ContactFormModal 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </>
  );
};

export default VirtualAssistantPopup;
