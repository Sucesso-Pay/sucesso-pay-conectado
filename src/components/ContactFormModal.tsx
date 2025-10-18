import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Fale com um Especialista</DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          <p className="text-muted-foreground text-center">
            Em breve você poderá entrar em contato através deste formulário.
          </p>
          {/* Google Forms será embedado aqui */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
