import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactFormModal from "@/components/ContactFormModal";
import { useState } from "react";
import { 
  Receipt, 
  Calendar, 
  CreditCard, 
  Split, 
  Banknote, 
  TrendingUp, 
  PiggyBank,
  Smartphone,
  ArrowRight,
  Check
} from "lucide-react";
import contaDigitalHero from "@/assets/conta-digital-hero.png";
import contaDigitalMenu from "@/assets/conta-digital-menu.png";
import contaDigitalAntecipacao from "@/assets/conta-digital-antecipacao.png";
import contaDigitalPagamentos from "@/assets/conta-digital-pagamentos.png";
import contaDigitalAgenda from "@/assets/conta-digital-agenda.png";
import contaDigitalTransacoes from "@/assets/conta-digital-transacoes.png";

const ContaDigital = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const features = [
    {
      icon: Receipt,
      title: "Transações",
      description: "Acompanhe todas as vendas do seu negócio em tempo real. Visualize detalhes completos de cada transação com filtros por período, status, tipo de pagamento e bandeira.",
      image: contaDigitalTransacoes,
      benefits: [
        "Visão em tempo real de todas as vendas",
        "Filtros avançados por período e status",
        "Detalhamento completo por transação",
        "Exportação de dados para relatórios"
      ]
    },
    {
      icon: Calendar,
      title: "Agenda de Recebíveis",
      description: "Tenha total clareza sobre quando e quanto você vai receber. Planeje seu fluxo de caixa com precisão e antecipe recursos quando necessário.",
      image: contaDigitalAgenda,
      benefits: [
        "Visualização clara de todos os recebimentos futuros",
        "Filtros por período personalizável",
        "Detalhamento de valores originais e líquidos",
        "Acompanhamento de débitos e créditos"
      ]
    },
    {
      icon: CreditCard,
      title: "Pagamentos",
      description: "Controle total sobre valores já recebidos. Acompanhe histórico detalhado com informações sobre recebíveis, débitos, splits e créditos de cada pagamento.",
      image: contaDigitalPagamentos,
      benefits: [
        "Histórico completo de pagamentos liquidados",
        "Detalhamento de recebíveis, débitos e splits",
        "Filtros por período e tipo",
        "Acesso rápido a detalhes de cada pagamento"
      ]
    },
    {
      icon: TrendingUp,
      title: "Antecipação de Recebíveis",
      description: "Precisa de capital de giro? Antecipe seus recebimentos futuros de forma rápida e simples. Solicite valores específicos e receba no próximo dia útil.",
      image: contaDigitalAntecipacao,
      benefits: [
        "Antecipação flexível de valores futuros",
        "Processo rápido e descomplicado",
        "Recebimento no próximo dia útil",
        "Total controle sobre valores antecipados"
      ]
    },
    {
      icon: Split,
      title: "Split de Recebíveis",
      description: "Divida automaticamente seus recebimentos com fornecedores e parceiros. Configure splits personalizados e automatize pagamentos.",
      benefits: [
        "Divisão automática de recebíveis",
        "Gestão de múltiplos beneficiários",
        "Configuração flexível de percentuais",
        "Pagamentos automáticos para parceiros"
      ]
    },
    {
      icon: Banknote,
      title: "Pagamento de Boletos",
      description: "Pague boletos usando seus recebíveis futuros. Programe pagamentos e mantenha seu capital de giro preservado.",
      benefits: [
        "Pagamento com recebíveis futuros",
        "Agendamento de pagamentos",
        "Desconto automático da agenda",
        "Preservação do capital de giro"
      ]
    },
    {
      icon: PiggyBank,
      title: "Acúmulo de Recebíveis",
      description: "Acumule valores por períodos personalizados para melhor gestão do seu fluxo de caixa. Defina quando liquidar e mantenha controle total.",
      benefits: [
        "Acúmulo por períodos personalizados",
        "Melhor planejamento financeiro",
        "Controle de liquidações programadas",
        "Flexibilidade na gestão de caixa"
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-0 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-end pb-20">
              <div className="relative order-2 lg:order-1 flex items-end">
                <div className="relative z-10 w-full">
                  <img 
                    src={contaDigitalHero} 
                    alt="Conta Digital Sucesso Pay na palma da mão"
                    className="w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Smartphone className="h-4 w-4" />
                  <span className="text-sm font-semibold">Gestão Financeira Completa</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Controle Total das Suas Finanças na Palma da Mão
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Gerencie transações, recebíveis, pagamentos e muito mais. 
                  Tudo em tempo real, direto do seu smartphone, com a segurança e praticidade que seu negócio merece.
                </p>
                <Button size="lg" className="font-semibold" onClick={() => setIsContactModalOpen(true)}>
                  Quero Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça as Funcionalidades em Ação
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Veja como é fácil gerenciar todas as operações financeiras do seu negócio 
              com as telas reais da Conta Digital Sucesso Pay
            </p>
          </div>

          {/* Transações */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Receipt className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Transações</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Acompanhe cada venda realizada com clareza total. Veja status em tempo real, 
                  filtre por período, tipo de pagamento e bandeira. Exporte dados para análises detalhadas.
                </p>
                <div className="space-y-3">
                  {features[0].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={contaDigitalTransacoes} 
                  alt="Tela de Transações da Conta Digital"
                  className="w-full max-w-xl mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Agenda de Recebíveis */}
          <div className="mb-24 bg-card/50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img 
                  src={contaDigitalAgenda} 
                  alt="Tela de Agenda de Recebíveis"
                  className="w-full max-w-xl mx-auto drop-shadow-2xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Agenda de Recebíveis</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Saiba exatamente quando e quanto você vai receber. Planeje investimentos, 
                  antecipe recursos e tome decisões estratégicas com base em dados precisos.
                </p>
                <div className="space-y-3">
                  {features[1].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagamentos */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Pagamentos</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Histórico completo de valores já liquidados. Visualize detalhamento de recebíveis, 
                  débitos, splits e créditos de cada pagamento com total transparência.
                </p>
                <div className="space-y-3">
                  {features[2].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={contaDigitalPagamentos} 
                  alt="Tela de Pagamentos"
                  className="w-full max-w-xl mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades Exclusivas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas para eficiência financeira do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.slice(4).map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Antecipação */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img 
                  src={contaDigitalAntecipacao} 
                  alt="Tela de Antecipação de Recebíveis"
                  className="w-full max-w-xl mx-auto drop-shadow-2xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Antecipação de Recebíveis</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Precisa de capital de giro agora? Antecipe seus recebimentos futuros 
                  de forma simples e rápida, com recebimento no próximo dia útil.
                </p>
                <div className="space-y-3">
                  {features[3].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme a Gestão Financeira do Seu Negócio
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Junte-se a centenas de empresas que já otimizaram sua gestão financeira 
              com a Conta Digital Sucesso Pay. Tenha controle total, transparência e 
              eficiência em todas as suas operações.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-semibold" onClick={() => setIsContactModalOpen(true)}>
                Quero Abrir Minha Conta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" onClick={() => setIsContactModalOpen(true)}>
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default ContaDigital;
