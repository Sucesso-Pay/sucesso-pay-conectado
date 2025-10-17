import { removeBackground, loadImage } from '@/lib/removeBackground';

// Script to process images and remove backgrounds
const processImages = async () => {
  const images = [
    { input: '/src/assets/conta-digital-split.jpg', output: '/src/assets/conta-digital-split-transparent.png' },
    { input: '/src/assets/conta-digital-boletos.jpg', output: '/src/assets/conta-digital-boletos-transparent.png' },
    { input: '/src/assets/conta-digital-beneficiarios.jpg', output: '/src/assets/conta-digital-beneficiarios-transparent.png' },
    { input: '/src/assets/conta-digital-acumulo.jpg', output: '/src/assets/conta-digital-acumulo-transparent.png' },
  ];

  for (const { input, output } of images) {
    try {
      console.log(`Processing ${input}...`);
      
      // Load the image
      const response = await fetch(input);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Remove background
      const resultBlob = await removeBackground(imageElement);
      
      // Download the processed image
      const url = URL.createObjectURL(resultBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = output.split('/').pop() || 'processed.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log(`Successfully processed ${input}`);
    } catch (error) {
      console.error(`Error processing ${input}:`, error);
    }
  }
};

// Run on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    console.log('Image processor loaded. Call processImages() to start processing.');
    (window as any).processImages = processImages;
  });
}

export default processImages;
