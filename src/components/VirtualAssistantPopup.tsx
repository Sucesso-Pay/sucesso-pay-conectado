import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import virtualAssistant from "@/assets/virtual-assistant.png";

const VirtualAssistantPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Texto de apresentação - EDITE AQUI
  const welcomeMessage = "Olá! Precisa de ajuda? Estou aqui para atender você!";
  
  // Número do WhatsApp da Sucesso Pay - EDITE AQUI SE NECESSÁRIO
  const whatsappNumber = "5511999999999"; // Formato: código do país + DDD + número

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

  const handleAssistantClick = () => {
    const message = encodeURIComponent("Olá! Vim através do site da Sucesso Pay.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="max-w-md p-0 gap-0 border-none bg-transparent shadow-none"
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

          {/* Conteúdo clicável */}
          <div
            onClick={handleAssistantClick}
            className="cursor-pointer hover:bg-accent/5 transition-colors p-8"
          >
            {/* Imagem do atendente */}
            <div className="flex justify-center mb-6">
              <img
                src={virtualAssistant}
                alt="Atendente Virtual Sucesso Pay"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Texto de apresentação - EDITE O welcomeMessage ACIMA */}
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Atendimento Sucesso Pay
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {welcomeMessage}
              </p>
              <div className="pt-4">
                <span className="text-sm text-primary font-medium">
                  Clique aqui para conversar no WhatsApp →
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualAssistantPopup;
