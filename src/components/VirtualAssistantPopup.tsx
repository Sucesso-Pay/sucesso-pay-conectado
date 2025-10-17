import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Headphones } from "lucide-react";
import virtualAssistant from "@/assets/virtual-assistant.png";
import ContactFormModal from "./ContactFormModal";
import { useVirtualAssistant } from "@/contexts/VirtualAssistantContext";

const VirtualAssistantPopup = () => {
  const { isOpen, closeAssistant, openAssistantWithSound } = useVirtualAssistant();
  // Verificar se já foi mostrado nesta sessão
  const [hasShown, setHasShown] = useState(() => {
    return sessionStorage.getItem('virtualAssistantShown') === 'true';
  });
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Texto de apresentação - EDITE AQUI
  const welcomeMessage = "Olá! Precisa de ajuda? Estou aqui para atender você!";
  
  // Número do WhatsApp de Suporte - EDITE AQUI
  const supportWhatsappNumber = "5511999999999"; // Formato: código do país + DDD + número

  // Função para tocar som de notificação sincronizado com abertura
  const playNotificationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Som tipo mensagem recebida - duas notas rápidas
    oscillator.frequency.value = 800;
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
    
    // Segunda nota
    setTimeout(() => {
      const oscillator2 = audioContext.createOscillator();
      const gainNode2 = audioContext.createGain();
      
      oscillator2.connect(gainNode2);
      gainNode2.connect(audioContext.destination);
      
      oscillator2.frequency.value = 1000;
      gainNode2.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator2.start(audioContext.currentTime);
      oscillator2.stop(audioContext.currentTime + 0.1);
    }, 100);
  };

  useEffect(() => {
    if (hasShown) return;

    let inactivityTimer: NodeJS.Timeout;
    let mouseMovementTimer: NodeJS.Timeout;

    // Detectar inatividade do mouse (30 segundos)
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      if (!hasShown) {
        inactivityTimer = setTimeout(() => {
          playNotificationSound();
          setTimeout(() => openAssistantWithSound(), 50); // Pequeno delay para sincronizar
          setHasShown(true);
          sessionStorage.setItem('virtualAssistantShown', 'true'); // Persistir para toda a sessão
        }, 30000); // 30 segundos
      }
    };

    // Detectar tentativa de sair da página
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        playNotificationSound();
        setTimeout(() => openAssistantWithSound(), 50); // Pequeno delay para sincronizar
        setHasShown(true);
        sessionStorage.setItem('virtualAssistantShown', 'true'); // Persistir para toda a sessão
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
  }, [hasShown, openAssistantWithSound]);

  const handleCommercialClick = () => {
    closeAssistant();
    setIsContactFormOpen(true);
  };

  const handleSupportClick = () => {
    const message = encodeURIComponent("Olá! Sou cliente e preciso de suporte.");
    window.open(`https://wa.me/${supportWhatsappNumber}?text=${message}`, "_blank");
    closeAssistant();
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeAssistant();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={closeAssistant}>
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

            {/* Conteúdo */}
            <div className="pt-2 px-6 pb-6">
              {/* Imagem do atendente */}
              <div className="flex justify-center -mb-20">
                <img
                  src={virtualAssistant}
                  alt="Marcelo da Sucesso - Atendente Virtual"
                  className="w-[350px] h-[350px] object-contain"
                />
              </div>

              {/* Texto de apresentação */}
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Marcelo da Sucesso
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {welcomeMessage}
                </p>

                {/* Botões de ação */}
                <div className="space-y-3 pt-2">
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
                    size="lg"
                    className="w-full text-base h-12 bg-primary/20 text-primary hover:bg-primary/30 border-0"
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
