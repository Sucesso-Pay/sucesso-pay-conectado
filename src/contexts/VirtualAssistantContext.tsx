import { createContext, useContext, useState, ReactNode } from "react";

interface VirtualAssistantContextType {
  isOpen: boolean;
  openAssistant: () => void;
  closeAssistant: () => void;
}

const VirtualAssistantContext = createContext<VirtualAssistantContextType | undefined>(undefined);

export const VirtualAssistantProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAssistant = () => setIsOpen(true);
  const closeAssistant = () => setIsOpen(false);

  return (
    <VirtualAssistantContext.Provider value={{ isOpen, openAssistant, closeAssistant }}>
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
