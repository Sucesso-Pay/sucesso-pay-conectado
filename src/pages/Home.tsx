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
  Calendar
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-business.png";
import posImage from "@/assets/pos-machine.png";
import mobileImage from "@/assets/mobile-app.png";

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
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Soluções Financeiras para o{" "}
                <span className="text-primary">Maior Sucesso</span> do Seu Negócio
              </h1>
              <p className="text-xl text-muted-foreground">
                Gestão financeira completa com maquininha, conta digital e portal de gestão. 
                A única plataforma com tecnologia de Gestão de Agenda para seu negócio crescer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg font-semibold px-8 h-14">
                  Abrir Minha Conta Grátis
                </Button>
                <Button size="lg" variant="outline" className="text-lg font-semibold px-8 h-14">
                  Falar com Especialista
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">40%+</p>
                  <p className="text-sm text-muted-foreground">Economia Tributária</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">Taxa Zero</p>
                  <p className="text-sm text-muted-foreground">Opção de Recebimento</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">1 Dia</p>
                  <p className="text-sm text-muted-foreground">Dinheiro na Conta</p>
                </div>
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
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Gestão Financeira Inteligente</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A única plataforma com Gestão de Agenda de Recebíveis. 
              Controle total sobre suas vendas antes mesmo do dinheiro cair na conta.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <Split className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Split de Recebíveis</h3>
                <p className="opacity-90">
                  Divida automaticamente os pagamentos entre diferentes profissionais 
                  antes da liquidação. Ideal para clínicas e estabelecimentos com múltiplos prestadores.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <Calendar className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gestão de Agenda</h3>
                <p className="opacity-90">
                  Visualize e gerencie todos os valores a receber. Antecipe, acumule ou 
                  use seus recebíveis para pagar fornecedores.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <TrendingUp className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Economia Tributária</h3>
                <p className="opacity-90">
                  Reduza até 40% em custos tributários com nossa solução exclusiva. 
                  Mais dinheiro no seu bolso, menos burocracia.
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
                <Wallet className="h-12 w-12 mx-auto mb-4 text-primary" />
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
              <h2 className="text-4xl font-bold">Maquininha de Última Geração</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Parcelamento em até 21x</h3>
                    <p className="text-muted-foreground">Aumente o poder de compra do seu cliente</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Pagamento por Aproximação</h3>
                    <p className="text-muted-foreground">Aceite todas as formas de pagamento modernas</p>
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
              <Button size="lg" className="mt-6">
                Solicitar Maquininha
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
                    <h3 className="font-semibold">Transferências e PIX</h3>
                    <p className="text-muted-foreground">Envie e receba dinheiro sem custos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Pagamento de Boletos</h3>
                    <p className="text-muted-foreground">Pague fornecedores direto da conta ou com recebíveis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Gestão Financeira Integrada</h3>
                    <p className="text-muted-foreground">Controle total das suas finanças em um só lugar</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="mt-6">
                Abrir Conta Digital
              </Button>
            </div>
            <div>
              <img src={mobileImage} alt="App Conta Digital Sucesso Pay" className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Perfeito para Seu Segmento</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções pensadas especialmente para as necessidades do seu negócio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Clínicas e Saúde</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Split ideal para dividir pagamentos entre profissionais. Economia tributária de até 40%.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Petshops e Veterinárias</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Parcelamento facilitado para procedimentos de alto valor. Gestão simplificada.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Restaurantes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recebimento rápido e múltiplas formas de pagamento. Controle de caixa eficiente.
                </p>
                <Button variant="link" className="p-0">Saiba mais →</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
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
              <h3 className="text-xl font-semibold">Resultados Comprovados</h3>
              <p className="text-muted-foreground">
                Centenas de clientes com economias tributárias de 40% ou mais
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Wallet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Estratégias Personalizadas</h3>
              <p className="text-muted-foreground">
                Abordagens customizadas para maximizar a eficiência do seu negócio
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
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Abra sua conta grátis e comece a aproveitar todos os benefícios da Sucesso Pay hoje mesmo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg font-semibold px-8 h-14">
              Abrir Minha Conta Grátis
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold px-8 h-14 bg-transparent border-white text-white hover:bg-white hover:text-primary">
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
