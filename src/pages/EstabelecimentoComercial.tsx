import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EstabelecimentoComercial = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções para Estabelecimentos Comerciais
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Plataforma completa para gerenciar seu estabelecimento com eficiência
            </p>
            <Button size="lg">
              Falar com Especialista
            </Button>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <p className="text-center text-muted-foreground">
              Conteúdo em desenvolvimento...
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EstabelecimentoComercial;
