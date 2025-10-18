import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Wifi, 
  Smartphone, 
  CreditCard,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import posImage from "@/assets/pos-machine.png";

const Maquininhas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Maquininhas de{" "}
                <span className="text-primary">Última Geração</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tecnologia avançada, design robusto e múltiplas formas de pagamento. 
                Tudo para impulsionar as vendas do seu negócio.
              </p>
              <Button size="lg" className="text-lg font-semibold px-8 h-14">
                Falar com Especialista
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={posImage} 
                alt="Maquininhas Sucesso Pay" 
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características Principais */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Características Principais</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de ponta para facilitar suas vendas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <Wifi className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rápida e Robusta</h3>
                <p className="text-muted-foreground">
                  Wi-Fi, Chip 4G e Touch Screen, sem botões físicos. Processamento ultrarrápido 
                  para não perder nenhuma venda.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pagamento por Aproximação</h3>
                <p className="text-muted-foreground">
                  Aceite pagamento com cartões, celulares e relógios. Tecnologia NFC 
                  para transações mais rápidas e seguras.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Taxa Zero Disponível</h3>
                <p className="text-muted-foreground">
                  Opção de recebimento sem taxas para melhorar sua margem. 
                  Mais lucro em cada transação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formas de Pagamento */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Aceite Todas as Formas de Pagamento</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofereça flexibilidade aos seus clientes e aumente suas vendas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Débito e Crédito</h3>
                <p className="text-sm text-muted-foreground">
                  Todas as bandeiras aceitas
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">PIX e QR Code</h3>
                <p className="text-sm text-muted-foreground">
                  Recebimento instantâneo
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Aproximação</h3>
                <p className="text-sm text-muted-foreground">
                  Cartões, celulares e relógios
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Parcelamento</h3>
                <p className="text-sm text-muted-foreground">
                  Em até 21x sem juros
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Por Que Escolher Nossas Maquininhas?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center text-white space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Segurança Máxima</h3>
              <p className="opacity-90">
                Certificação PCI e criptografia de ponta a ponta em todas as transações
              </p>
            </div>
            <div className="text-center text-white space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Recebimento Rápido</h3>
              <p className="opacity-90">
                Receba em 1 dia útil ou antecipe seus recebíveis quando precisar
              </p>
            </div>
            <div className="text-center text-white space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Aumente suas Vendas</h3>
              <p className="opacity-90">
                Parcelamento em até 21x e múltiplas formas de pagamento aumentam conversão
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-8 text-center">Diferenciais das Nossas Maquininhas</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Touch Screen Intuitivo</h3>
                <p className="text-muted-foreground">
                  Interface moderna e fácil de usar, sem complicações
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Bateria de Longa Duração</h3>
                <p className="text-muted-foreground">
                  Funcione o dia todo sem preocupações
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Impressora de Comprovante Integrada</h3>
                <p className="text-muted-foreground">
                  Bobina térmica para comprovantes rápidos e nítidos
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Conectividade Múltipla</h3>
                <p className="text-muted-foreground">
                  Wi-Fi, 4G e Bluetooth para garantir sempre a melhor conexão
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Gestão Integrada</h3>
                <p className="text-muted-foreground">
                  Sincronização automática com conta digital e portal de gestão
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para Modernizar Seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Adquira sua maquininha Sucesso Pay e comece a vender mais hoje mesmo
          </p>
          <Button size="lg" className="text-lg font-semibold px-8 h-14">
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maquininhas;
