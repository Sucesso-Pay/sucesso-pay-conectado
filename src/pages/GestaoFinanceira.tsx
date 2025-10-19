import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useVirtualAssistant } from "@/contexts/VirtualAssistantContext";
import {
  Wallet,
  TrendingUp,
  Split,
  Calendar,
  CreditCard,
  Shield,
  Link2,
  Repeat,
  Lock,
  CheckCircle,
  PiggyBank,
  BarChart3,
  FileText,
  DollarSign,
} from "lucide-react";
import linkPagamentoImg from "@/assets/link-pagamento-interface.png";

const GestaoFinanceira = () => {
  const { openAssistant } = useVirtualAssistant();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Portal de Gestão Financeira
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Controle total das suas finanças em um só lugar. Gerencie recebíveis, antecipe valores, crie links de pagamento e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={openAssistant}>
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/conta-digital">Conhecer Conta Digital</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funcionalidades do Portal
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa para uma gestão financeira eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Gestão de Recebíveis</CardTitle>
                <CardDescription>
                  Utilize os valores que tem a receber antes mesmo que sejam liquidados em sua conta. Otimize seu fluxo de caixa e melhore o planejamento tributário.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Split className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Split de Recebíveis</CardTitle>
                <CardDescription>
                  Divida automaticamente os pagamentos entre diferentes beneficiários antes da liquidação. Ideal para clínicas, escritórios e negócios com múltiplos profissionais.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Agenda Financeira</CardTitle>
                <CardDescription>
                  Visualize todos os seus recebíveis, débitos e créditos em uma linha do tempo clara. Planeje-se com antecedência e tome decisões informadas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Antecipação de Valores</CardTitle>
                <CardDescription>
                  Antecipe seus recebíveis com taxas competitivas. Tenha acesso rápido ao capital que precisa para investir no crescimento do seu negócio.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Relatórios e Analytics</CardTitle>
                <CardDescription>
                  Acompanhe a progressão do TPV, analise tendências de vendas e exporte relatórios detalhados para facilitar sua gestão financeira.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Área Pix Integrada</CardTitle>
                <CardDescription>
                  Realize transferências Pix diretamente do portal, acompanhe o histórico de transações e gerencie seus pagamentos de forma rápida e segura.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Link de Pagamento Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Link de Pagamento
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Seu negócio precisa cobrar clientes a distância? Crie links de pagamento com poucos cliques e receba com segurança total.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Geração Rápida</h3>
                    <p className="text-muted-foreground">
                      Crie links de pagamento com poucos cliques, sem complicação
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Taxa Zero Disponível</h3>
                    <p className="text-muted-foreground">
                      Opção de recebimento com taxa zero para aumentar sua margem
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Parcelamento Flexível</h3>
                    <p className="text-muted-foreground">
                      Parcelamento em até 21x, com parcela aberta ou fechada
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Pagamentos Recorrentes</h3>
                    <p className="text-muted-foreground">
                      Configure cobrança automática diária, semanal ou mensal
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Validação de Boletos</h3>
                    <p className="text-muted-foreground">
                      Aceite boletos validados automaticamente no sistema
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={openAssistant}>
                Começar a Usar Links de Pagamento
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl border">
              <img
                src={linkPagamentoImg}
                alt="Interface de criação de link de pagamento com validação de boleto"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologia 3DS Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tecnologia 3DS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A tecnologia para link de pagamento mais moderna e segura do mercado
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Segurança Máxima</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O 3D Secure (3DS) é um protocolo de segurança que adiciona uma camada extra de autenticação em transações online com cartão de crédito e débito. Protege tanto o estabelecimento quanto o comprador contra fraudes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Autenticação Avançada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A autenticação 3DS verifica a identidade do portador do cartão durante a transação, reduzindo drasticamente o risco de chargebacks e fraudes, garantindo mais segurança para seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Aumento na Aprovação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transações autenticadas via 3DS têm maiores taxas de aprovação pelos bancos emissores, pois demonstram maior segurança e conformidade com as normas do mercado financeiro.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Padrão Internacional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desenvolvido pelas principais bandeiras de cartão (Visa, Mastercard, Elo), o 3DS é o padrão global de segurança para pagamentos online, garantindo conformidade e confiança.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Por que o 3DS é Fundamental?
              </h3>
              <p className="text-muted-foreground mb-6">
                Em um cenário onde a segurança digital é cada vez mais crítica, o 3D Secure oferece a proteção necessária para que você possa vender online com tranquilidade. A tecnologia 3DS da Sucesso Pay, powered by Cappta, garante que seus links de pagamento sejam processados com o mais alto nível de segurança do mercado.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">-70%</div>
                  <p className="text-sm text-muted-foreground">Redução em fraudes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">+15%</div>
                  <p className="text-sm text-muted-foreground">Aumento em aprovações</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Conformidade internacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vantagens do Portal de Gestão
            </h2>
            <p className="text-lg text-muted-foreground">
              Transforme a forma como você gerencia as finanças do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <PiggyBank className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Otimização do Fluxo de Caixa</h3>
                <p className="text-muted-foreground">
                  Use seus recebíveis antes da liquidação e mantenha seu negócio sempre com capital de giro disponível.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FileText className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Redução de Bitributação</h3>
                <p className="text-muted-foreground">
                  Melhore seu planejamento tributário evitando fenômenos negativos como a bitributação através da gestão inteligente de recebíveis.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Split className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Gestão Simplificada</h3>
                <p className="text-muted-foreground">
                  Ideal para negócios com múltiplos profissionais. Divida automaticamente os pagamentos entre beneficiários.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <BarChart3 className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Visibilidade Total</h3>
                <p className="text-muted-foreground">
                  Acompanhe em tempo real a progressão do seu TPV, analise tendências e tome decisões baseadas em dados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar sua Gestão Financeira?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Fale com nossos especialistas e descubra como o Portal de Gestão Financeira pode impulsionar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={openAssistant}>
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link to="/conta-digital">Conhecer Conta Digital</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoFinanceira;
