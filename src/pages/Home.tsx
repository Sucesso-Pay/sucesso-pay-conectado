import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wallet, 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  BarChart3,
  Split,
  Calendar,
  Barcode
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-business.png";
import posImage from "@/assets/pos-machine.png";
import mobileImage from "@/assets/mobile-app.png";
import financialPatternBg from "@/assets/financial-pattern-bg.png";
import paymentPatternBg from "@/assets/payment-pattern-bg.png";
import segmentsPatternBg from "@/assets/segments-pattern-bg.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Soluções financeiras para o{" "}
                <span className="text-primary">maior sucesso</span> do seu negócio
              </h1>
              <p className="text-xl text-muted-foreground">
                Plataforma completa com maquininha, conta digital e portal online. 
                Tecnologia exclusiva de Gestão de Recebíveis para seu negócio crescer ainda mais.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="text-lg font-semibold px-8 h-14">
                  Falar com Especialista
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Profissionais usando Sucesso Pay" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gestão Financeira Destaque */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${financialPatternBg})`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gestão Financeira Inteligente</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto font-bold">
              Ferramentas para o seu financeiro e contábil aumentarem seus ganhos instantaneamente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group bg-white/15 backdrop-blur-md border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 animate-fade-in [animation-delay:100ms]">
              <CardContent className="pt-8 pb-8 text-white">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Gestão de Agenda</h3>
                <p className="opacity-90 text-base leading-relaxed">
                  Visualize e gerencie todos os valores a receber. Antecipe, acumule ou 
                  use seus recebíveis para pagar fornecedores.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-white/15 backdrop-blur-md border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 animate-fade-in [animation-delay:200ms]">
              <CardContent className="pt-8 pb-8 text-white">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Split className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Split de Recebíveis</h3>
                <p className="opacity-90 text-base leading-relaxed">
                  Divida os recebíveis ou use-os para pagar profissionais e empresas antes mesmo do pagamento. Automatize, pague Boletos ou faça Pix.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-white/15 backdrop-blur-md border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 animate-fade-in [animation-delay:300ms]">
              <CardContent className="pt-8 pb-8 text-white">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Planejamento Tributário</h3>
                <p className="opacity-90 text-base leading-relaxed">
                  Reordene a sua emissão de notas e economize em torno de 40% em desperdícios de bitributação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formas de Cobrança */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Várias Formas de Receber</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofereça múltiplas opções de pagamento aos seus clientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Maquininha</h3>
                <p className="text-sm text-muted-foreground">
                  Débito, Crédito e Parcelamento em até 21x
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">PIX e QR Code</h3>
                <p className="text-sm text-muted-foreground">
                  Receba pela maquininha ou por Bolepix
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Barcode className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Boleto</h3>
                <p className="text-sm text-muted-foreground">
                  Emita boletos pela Conta Digital
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Link de Pagamento</h3>
                <p className="text-sm text-muted-foreground">
                  Envie cobranças de até 21x por WhatsApp, email ou redes sociais
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Assinaturas</h3>
                <p className="text-sm text-muted-foreground">
                  Cobranças recorrentes automáticas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <img src={posImage} alt="Maquininha Sucesso Pay" className="w-full max-w-md mx-auto" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-bold">Maquininhas de Última Geração</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Rápida e Robusta</h3>
                    <p className="text-muted-foreground">Wi-Fi, Chip e Touch Screen, sem botões físicos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Pagamento por Aproximação</h3>
                    <p className="text-muted-foreground">Aceite pagamento com cartões, celulares e relógios</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Taxa Zero Disponível</h3>
                    <p className="text-muted-foreground">Opção de recebimento sem taxas para melhorar sua margem</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="mt-6" asChild>
                <a href="/maquininhas">Saber mais</a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Conta Digital Completa</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Área Pix</h3>
                    <p className="text-muted-foreground">Crie, altere ou portabilize chaves. Envie Pix sem custos por operação</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Pagamentos</h3>
                    <p className="text-muted-foreground">Emita cobranças em Bolepix e Link de Pagamento. Agende, aprove e pague fornecedores com saldo em reais ou usando recebíveis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Menu Gestão Financeira</h3>
                    <p className="text-muted-foreground">Transações, Gestão de Agenda, Splits, Antecipação e Acúmulo de Recebíveis</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="mt-6" asChild>
                <a href="/conta-digital">Ver mais funções</a>
              </Button>
            </div>
            <div>
              <img src={mobileImage} alt="App Conta Digital Sucesso Pay" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-20 relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-muted/30 to-background" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${segmentsPatternBg})`,
            backgroundSize: '800px 800px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.03) 0%, transparent 50%)',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-6 pb-6">
                <h2 className="text-4xl font-bold mb-4">Perfeito para Seu Segmento</h2>
                <p className="text-xl text-muted-foreground">
                  Soluções pensadas especialmente para as necessidades do seu negócio
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Clínicas e Saúde</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Split ideal para dividir pagamentos entre profissionais. Economia tributária de até 40%.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Petshops e Veterinárias</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Parcelamento facilitado para procedimentos de alto valor. Gestão simplificada.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Restaurantes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recebimento rápido e múltiplas formas de pagamento. Controle de caixa eficiente.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Varejo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Aumente vendas com parcelamento em até 21x. Gestão financeira integrada.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por Que Escolher a Sucesso Pay?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Sempre Perto</h3>
              <p className="text-muted-foreground">
                Conte sempre com um distribuidor local que será conhecedor do seu negócio
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Estratégias Personalizadas</h3>
              <p className="text-muted-foreground">
                Abordagens customizadas para maximizar a eficiência operacional e financeira
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Parcerias de Valor</h3>
              <p className="text-muted-foreground">
                Investimos em relações de longo prazo para garantir seu sucesso contínuo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para um novo salto de sucesso?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Receba um contato de um especialista e transforme seu financeiro com a Sucesso Pay
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg font-semibold px-8 h-14">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
