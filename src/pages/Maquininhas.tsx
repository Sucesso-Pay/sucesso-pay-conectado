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
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-2">Receba por Aproximação</h3>
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
                  Opção de recebimento com taxas ao cliente para melhorar sua margem em altos parcelamentos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Segurança Máxima</h3>
                <p className="text-muted-foreground">
                  Certificação PCI e criptografia de ponta a ponta em todas as transações
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
                  Para as vendas do dia a dia
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">PIX e QR Code</h3>
                <p className="text-sm text-muted-foreground">
                  Fácil conciliação
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

      {/* Benefícios PIX na Maquininha */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Benefícios de usar PIX na Maquininha</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oriente seus colaboradores a usar o Pix na maquininha e tenha vários benefícios:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Segurança</h3>
                <p className="text-muted-foreground">
                  O recibo para o seu cliente sai na hora e você terá a certeza de que o PIX cairá na conta correta, evitando golpes.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flexibilidade</h3>
                <p className="text-muted-foreground">
                  Qualquer funcionário pode fazer a venda sem precisar ter acesso à conta principal da empresa.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Facilidade na Conciliação</h3>
                <p className="text-muted-foreground">
                  As vendas constarão no Portal, no relatório da maquininha, e os valores cairão junto das vendas em débito.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Eficiência Financeira</h3>
                <p className="text-muted-foreground">
                  Os valores transacionados poderão ser usados para realizar Splits e pagar fornecedores com recebíveis.
                </p>
              </CardContent>
            </Card>
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
