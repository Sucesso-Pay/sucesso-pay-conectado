import { createContext, useContext, useState, ReactNode } from "react";

interface VirtualAssistantContextType {
  isOpen: boolean;
  openAssistant: () => void;
  openAssistantWithSound: () => void;
  closeAssistant: () => void;
}

const VirtualAssistantContext = createContext<VirtualAssistantContextType | undefined>(undefined);

export const VirtualAssistantProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldPlaySound, setShouldPlaySound] = useState(false);

  const openAssistant = () => setIsOpen(true);
  
  const openAssistantWithSound = () => {
    setShouldPlaySound(true);
    setIsOpen(true);
  };
  
  const closeAssistant = () => {
    setIsOpen(false);
    setShouldPlaySound(false);
  };

  return (
    <VirtualAssistantContext.Provider value={{ isOpen, openAssistant, openAssistantWithSound, closeAssistant }}>
      {children}
    </VirtualAssistantContext.Provider>
  );
};

export const useVirtualAssistant = () => {
  const context = useContext(VirtualAssistantContext);
  if (!context) {
    throw new Error("useVirtualAssistant must be used within VirtualAssistantProvider");
  }
  return context;
};
