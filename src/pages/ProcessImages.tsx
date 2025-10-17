import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/lib/removeBackground';
import { toast } from 'sonner';

import contaDigitalSplit from "@/assets/conta-digital-split.jpg";
import contaDigitalBoletos from "@/assets/conta-digital-boletos.jpg";
import contaDigitalBeneficiarios from "@/assets/conta-digital-beneficiarios.jpg";
import contaDigitalAcumulo from "@/assets/conta-digital-acumulo.jpg";

const ProcessImages = () => {
  const [processing, setProcessing] = useState(false);

  const processImage = async (imageSrc: string, name: string) => {
    try {
      toast.info(`Processando ${name}...`);
      
      // Load the image
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Remove background
      const resultBlob = await removeBackground(imageElement);
      
      // Download the processed image
      const url = URL.createObjectURL(resultBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${name}-transparent.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success(`${name} processado com sucesso!`);
    } catch (error) {
      console.error(`Error processing ${name}:`, error);
      toast.error(`Erro ao processar ${name}`);
    }
  };

  const processAllImages = async () => {
    setProcessing(true);
    
    const images = [
      { src: contaDigitalSplit, name: 'split' },
      { src: contaDigitalBoletos, name: 'boletos' },
      { src: contaDigitalBeneficiarios, name: 'beneficiarios' },
      { src: contaDigitalAcumulo, name: 'acumulo' },
    ];

    for (const { src, name } of images) {
      await processImage(src, name);
    }
    
    setProcessing(false);
    toast.success('Todas as imagens foram processadas!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Processador de Imagens</h1>
          <p className="text-muted-foreground mb-8">
            Clique no botão abaixo para remover o fundo das imagens da Conta Digital
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Button 
            onClick={processAllImages} 
            disabled={processing}
            size="lg"
            className="w-full"
          >
            {processing ? 'Processando...' : 'Processar Todas as Imagens'}
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline"
              onClick={() => processImage(contaDigitalSplit, 'split')} 
              disabled={processing}
            >
              Split
            </Button>
            <Button 
              variant="outline"
              onClick={() => processImage(contaDigitalBoletos, 'boletos')} 
              disabled={processing}
            >
              Boletos
            </Button>
            <Button 
              variant="outline"
              onClick={() => processImage(contaDigitalBeneficiarios, 'beneficiarios')} 
              disabled={processing}
            >
              Beneficiários
            </Button>
            <Button 
              variant="outline"
              onClick={() => processImage(contaDigitalAcumulo, 'acumulo')} 
              disabled={processing}
            >
              Acúmulo
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          <p>As imagens processadas serão baixadas automaticamente.</p>
          <p>Depois, substitua os arquivos originais pelos processados em src/assets/</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessImages;
