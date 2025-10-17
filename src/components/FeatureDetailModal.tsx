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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold mb-4">
            {feature.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {feature.image && (
            <div className="w-full md:sticky md:top-0">
              <img 
                src={feature.image} 
                alt={`Tela de ${feature.title}`}
                className="w-full h-auto max-w-[280px] mx-auto drop-shadow-2xl"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <p className="text-base text-muted-foreground">
              {feature.description}
            </p>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Como funciona:</h3>
              <div className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-muted/50">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureDetailModal;
