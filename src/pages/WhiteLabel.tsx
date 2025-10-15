import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Building2, Wallet, Shield, Zap, Users, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const WhiteLabel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Soluções{" "}
              <span className="text-primary">White Label</span>{" "}
              para o Sucesso do Seu Novo Negócio
            </h1>
            <p className="text-xl text-muted-foreground">
              Conecte sua carteira de clientes a uma plataforma Embedded Finance com diferenciais exclusivos e adicione produtos financeiros ao seu posicionamento
            </p>
            <Button size="lg" className="text-lg font-semibold px-8 h-14">
              Falar com especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais White Label */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tecnologia Exclusiva com Sua Marca</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Torne-se provedor da única plataforma de embedded finance do mundo físico 
              com tecnologia de Gestão de Recebíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sua Marca em Tudo</h3>
                <p className="text-muted-foreground">
                  Maquininhas, aplicativo, portal de gestão e todos os materiais 
                  completamente personalizados com sua identidade visual.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seu Próprio Negócio</h3>
                <p className="text-muted-foreground">
                  Integre rapidamente as funções financeiras, de pagamentos e de cobranças nos seus sistemas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Gestão de Recebíveis</h3>
                <p className="text-muted-foreground">
                  Tecnologia exclusiva que permite gestão completa dos recebíveis 
                  pelo Estabelecimento.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regulamentação BC</h3>
                <p className="text-muted-foreground">
                  Opere com segurança, através de uma Instituição de Pagamento 
                  autorizada pelo Banco Central.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Implementação Rápida</h3>
                <p className="text-muted-foreground">
                  Plataforma pronta em 10 dias. Documentação simples, integrações rápidas e apoio para publicação dos APPs na Apple e no Google.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Suporte Dedicado</h3>
                <p className="text-muted-foreground">
                  Equipe especializada para suporte técnico, treinamentos e 
                  desenvolvimento de negócios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Plataforma Completa e Personalizável</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Todas as funcionalidades que seus clientes precisam, com sua marca
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Maquininha Personalizada</h3>
                <p className="text-sm opacity-90">
                  Hardware de última geração com sua marca, aceita todas as formas de pagamento
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Conta Digital White Label</h3>
                <p className="text-sm opacity-90">
                  Aplicativo mobile e funções web totalmente customizadas com suas cores e logo
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Portal de Gestão</h3>
                <p className="text-sm opacity-90">
                  Dashboard completo para gestão da carteira de clientes, controle das maquininhas, transações, recebíveis e mensalidades
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Split de Recebíveis</h3>
                <p className="text-sm opacity-90">
                  Divisão automática de pagamentos entre múltiplos beneficiários
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">Links de Pagamento</h3>
                <p className="text-sm opacity-90">
                  Crie e envie cobranças personalizadas por diversos canais
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white">
                <CheckCircle className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-2">PIX e Transferências</h3>
                <p className="text-sm opacity-90">
                  Receba via PIX e gerencie seus recebíveis em D+1
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Perfeito Para</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Redes de Franquias</h3>
                <p className="text-sm text-muted-foreground">
                  Unifique a gestão financeira de todas as unidades sob sua marca
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Empresas de Software</h3>
                <p className="text-sm text-muted-foreground">
                  Adicione funcionalidades financeiras ao seu produto
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Associações</h3>
                <p className="text-sm text-muted-foreground">
                  Ofereça soluções financeiras exclusivas aos seus associados
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold mb-2">Grandes Varejistas</h3>
                <p className="text-sm text-muted-foreground">
                  Crie seu próprio ecossistema de pagamentos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modelo de Negócio */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Como Funciona</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customização</h3>
                  <p className="text-muted-foreground">
                    Trabalhamos junto com você para personalizar toda a plataforma 
                    com sua identidade visual e necessidades específicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Implementação</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe cuida de toda a implementação técnica, integração 
                    e homologação junto aos órgãos reguladores.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Treinamento</h3>
                  <p className="text-muted-foreground">
                    Treinamos sua equipe para operar a plataforma e dar suporte 
                    aos seus clientes finais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lançamento</h3>
                  <p className="text-muted-foreground">
                    Você começa a operar com sua própria marca, e nós continuamos 
                    dando suporte técnico e atualizações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para Ter Sua Própria Marca?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solicite uma proposta personalizada e descubra como a solução White Label 
            da Sucesso Pay pode transformar seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg font-semibold px-8 h-14">
              Falar com especialista
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-semibold px-8 h-14">
              Agendar Reunião
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhiteLabel;
