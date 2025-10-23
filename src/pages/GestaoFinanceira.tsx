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
  Users,
  CreditCard,
  Shield,
  Link2,
  Repeat,
  Lock,
  CheckCircle,
  PiggyBank,
  BarChart3,
  FileText,
  Building2,
} from "lucide-react";
import linkPagamentoImg from "@/assets/link-pagamento-interface-new.png";

const GestaoFinanceira = () => {
  const { openAssistant } = useVirtualAssistant();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Portal de Gestão Financeira
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Controle total das suas finanças em um só lugar. Gerencie recebíveis, antecipe valores, crie links de pagamento e muito mais.
          </p>
          <div className="flex justify-center">
            <Button size="lg" onClick={openAssistant}>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="pt-12 pb-20 px-4">
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
                  Utilize os valores que tem a receber antes mesmo que sejam liquidados em sua conta. Realize Pix e pague boletos com recebíveis. Melhore seu planejamento tributário.
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
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Acesso Multiempresas</CardTitle>
                <CardDescription>
                  Tenha um acesso máster para gerir várias empresas com o mesmo login. Acesso rápido aos seus negócios e funções financeiras em um único lugar.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Gestão de Beneficiários</CardTitle>
                <CardDescription>
                  Cadastre beneficiários e seus domicílios bancários. Aprove beneficiários e Splits apenas com usuário máster. Flexibilidade com segurança para o sucesso do seu negócio!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Relatórios e Analytics</CardTitle>
                <CardDescription>
                  Acompanhe a progressão das vendas das maquininhas, pagamentos de boletos e links, compensação de Splits, extratos de movimentação e muito mais para facilitar sua gestão financeira.
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
              </div>

              <Button size="lg" onClick={openAssistant}>
                Começar a Usar Links de Pagamento
              </Button>
            </div>

            <div>
              <img
                src={linkPagamentoImg}
                alt="Interface de criação de link de pagamento"
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
              <h3 className="text-xl font-semibold mb-2">Funções de Banco Integradas</h3>
              <p className="text-muted-foreground">
                Cadastro de Contas de Fornecedores, Emissão e Pagamento de Boletos, Envio de Pix com recebíveis.
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
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar sua Gestão Financeira?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Fale com nossos especialistas e descubra como o Portal de Gestão Financeira pode impulsionar seu negócio
          </p>
          <div className="flex justify-center">
            <Button size="lg" onClick={openAssistant}>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoFinanceira;
