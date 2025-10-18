import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Briefcase, BookOpen, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Distribuidor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Mais um Passo de{" "}
              <span className="text-primary">Sucesso</span> na Sua Trajetória
            </h1>
            <p className="text-xl text-muted-foreground">
              Conecte seus clientes ao mundo de meios de pagamento e obtenha uma nova fonte de receita!
            </p>
            <Button size="lg" className="text-lg font-semibold px-8 h-14">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>


      {/* Diferenciais */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Por Que Ser um Distribuidor Sucesso Pay?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos muito mais do que apenas maquininhas. Nossa tecnologia exclusiva 
              gera benefícios reais e aumenta seu potencial de conversão.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tecnologia Exclusiva</h3>
                <p className="text-muted-foreground">
                  Portal financeiro completo com Gestão de Recebíveis. 
                  Uma solução diferenciada que seus concorrentes não têm.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Comissões Atrativas</h3>
                <p className="text-muted-foreground">
                  Ganhe comissões recorrentes sobre o volume transacionado pelos seus clientes. 
                  Quanto mais eles crescem, mais você ganha.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Treinamento Completo</h3>
                <p className="text-muted-foreground">
                  Plataforma de treinamento exclusiva para acelerar seu embarque e 
                  manter você sempre atualizado com as novidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portal POS */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Portal POS: Tecnologia Exclusiva</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ofereça aos seus clientes uma visão completa do negócio com nosso portal de gestão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visão Geral</h3>
                <p className="text-sm opacity-90">
                  Dashboard completo com progressão de TPV, markups e ticket médio
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Gestão de Clientes</h3>
                <p className="text-sm opacity-90">
                  Crie e gerencie sua carteira de clientes de forma eficiente
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Relatórios Detalhados</h3>
                <p className="text-sm opacity-90">
                  Análises completas de transações e recebíveis
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="pt-6 text-white text-center">
                <Zap className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Suporte Dedicado</h3>
                <p className="text-sm opacity-90">
                  Equipe pronta para ajudar você e seus clientes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios do Parceiro */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">O Que Você Ganha Como Distribuidor</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nova Fonte de Receita</h3>
                    <p className="text-muted-foreground">
                      Comissões recorrentes sobre todas as transações dos seus clientes. 
                      Ganhe mais quanto mais eles usam a solução.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diferenciais Competitivos</h3>
                    <p className="text-muted-foreground">
                      Tecnologia exclusiva que seus concorrentes não têm. Gestão de Recebíveis, 
                      Split de Recebíveis e economia tributária de até 40%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Suporte Completo</h3>
                    <p className="text-muted-foreground">
                      Plataforma de treinamento, materiais de marketing, suporte técnico 
                      e equipe dedicada para ajudar no crescimento do seu negócio.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instituição Regulamentada</h3>
                    <p className="text-muted-foreground">
                      Parceria tecnológica com Instituição de Pagamento autorizada pelo Banco Central. 
                      Segurança e credibilidade para você e seus clientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para Crescer Conosco?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Seja um distribuidor Sucesso Pay e tenha acesso a uma nova fonte de receita 
            com tecnologia exclusiva e suporte completo
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

export default Distribuidor;
