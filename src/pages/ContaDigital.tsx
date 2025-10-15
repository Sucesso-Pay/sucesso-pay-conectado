import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Receipt, 
  Calendar, 
  CreditCard, 
  Split, 
  Banknote, 
  TrendingUp, 
  PiggyBank,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ContaDigital = () => {
  const features = [
    {
      icon: Receipt,
      title: "Transações",
      description: "Visualize todas as transações do seu negócio em tempo real. Acompanhe vendas em crédito, débito e PIX com filtros por período, status, tipo e bandeira.",
    },
    {
      icon: Calendar,
      title: "Agenda de Recebíveis",
      description: "Visão clara dos valores que serão pagos ao seu estabelecimento. Planeje seu fluxo de caixa e antecipe recursos disponíveis com transparência total.",
    },
    {
      icon: CreditCard,
      title: "Pagamentos",
      description: "Acompanhe valores já recebidos organizados por dia. Identifique recebíveis, débitos, splits e créditos com detalhamento completo de cada pagamento.",
    },
    {
      icon: Split,
      title: "Split de Recebíveis",
      description: "Divida seus recebíveis para pagar fornecedores e parceiros automaticamente. Gerencie beneficiários, ative cadastros e crie splits de forma prática.",
    },
    {
      icon: Banknote,
      title: "Pagamento de Boletos",
      description: "Pague boletos utilizando seus recebíveis futuros sem comprometer capital de giro. Configure pagamentos programados com desconto automático da agenda.",
    },
    {
      icon: TrendingUp,
      title: "Antecipação de Recebíveis",
      description: "Antecipe recebimentos futuros quando precisar. Solicite adiantamento de valores específicos e receba no dia seguinte com total flexibilidade.",
    },
    {
      icon: PiggyBank,
      title: "Acúmulo de Recebíveis",
      description: "Acumule recebíveis para melhor gestão do fluxo de caixa. Configure períodos de acúmulo e tenha controle total sobre liquidações programadas.",
    },
  ];

  const benefits = [
    "Gestão completa dos seus recebimentos",
    "Controle total do fluxo de caixa",
    "Pagamentos automatizados",
    "Transparência em todas as operações",
    "Acesso via aplicativo mobile",
    "Integração com Portal de Gestão",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Conta Digital Completa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Gerencie todos os aspectos financeiros do seu negócio em um só lugar. 
              Tenha controle total sobre transações, recebíveis, pagamentos e muito mais.
            </p>
            <Button size="lg" className="font-semibold">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principais Funcionalidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra tudo o que a Conta Digital Sucesso Pay pode fazer pelo seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por Que Escolher Nossa Conta Digital?
              </h2>
              <p className="text-lg text-muted-foreground">
                Benefícios que fazem a diferença no dia a dia do seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto Para Transformar Sua Gestão Financeira?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Abra sua conta digital Sucesso Pay agora mesmo e comece a gerenciar 
              suas finanças com mais eficiência e praticidade.
            </p>
            <Button size="lg" className="font-semibold">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContaDigital;
