import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";

interface FeatureDetail {
  title: string;
  description: string;
  benefits: string[];
  image?: string;
}

interface FeatureDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: FeatureDetail | null;
}

const FeatureDetailModal = ({ isOpen, onClose, feature }: FeatureDetailModalProps) => {
  if (!feature) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold mb-4">
            {feature.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {feature.image && (
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img 
                src={feature.image} 
                alt={`Tela de ${feature.title}`}
                className="w-full h-auto"
              />
            </div>
          )}
          
          <p className="text-lg text-muted-foreground">
            {feature.description}
          </p>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Como funciona:</h3>
            <div className="space-y-3">
              {feature.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDetailModal;
