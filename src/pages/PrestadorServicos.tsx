import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Wrench, 
  Hammer, 
  Scissors,
  TrendingUp,
  Shield,
  DollarSign,
  Clock,
  Users,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const PrestadorServicos = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Receba o Valor Total",
      description: "Você recebe 100% do valor da transação e depois repassa a parte do estabelecimento conforme configurado no split."
    },
    {
      icon: Shield,
      title: "Sem Bitributação",
      description: "Sistema de split evita dupla tributação, garantindo economia fiscal significativa."
    },
    {
      icon: Clock,
      title: "Pagamento Flexível",
      description: "Seu cliente pode parcelar no cartão ou no link em até 21x, pagar um boleto, QRCode ou assinatura."
    },
    {
      icon: TrendingUp,
      title: "Split Inteligente",
      description: "Você pode dividir os recebíveis de uma venda automaticamente, pagar boletos ou realizar Pix com recebíveis."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Invertemos a lógica do mercado para você ter mais Sucesso!
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Na Sucesso Pay você recebe o valor total do negócio e depois repassa a parte do seu contratante! Seu cliente paga na hora conveniente, e seu contratante recebe sem bitributação.
            </p>
            <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="font-semibold">
              Quero Inverter a Lógica
            </Button>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <benefit.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Profissionais da Saúde e Estética */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Profissionais da Saúde e Estética
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Para médicos, veterinários, dentistas, fisioterapeutas, anestesistas e esteticistas que prestam serviços 
                  em hospitais, clínicas e consultórios.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Receba direto na sua conta</h3>
                      <p className="text-muted-foreground">
                        O valor do seu serviço cai diretamente na sua conta, sem intermediários.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Split customizado</h3>
                      <p className="text-muted-foreground">
                        Automatize percentuais de repasse ou divida recebíveis após a venda, evitando bitributação.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ofereça parcelamento</h3>
                      <p className="text-muted-foreground">
                        Facilite o acesso dos pacientes aos tratamentos com parcelamento flexível e entrada com Pix ou Boleto.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Aluga consultório ou clínica?</h3>
                      <p className="text-muted-foreground">
                        Atenda seus próprios pacientes e faça o split do valor do aluguel diretamente para o proprietário.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8" onClick={() => setIsContactModalOpen(true)}>
                  Quero essa Solução
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-muted rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  [Imagem de profissional da saúde/estética]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mecânicos e Profissionais Automotivos */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  [Imagem de mecânico/profissional automotivo]
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Mecânicos e Profissionais Automotivos
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Para mecânicos, eletricistas e funileiros que trabalham em oficinas e 
                  centros automotivos.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Elimine a bitributação</h3>
                      <p className="text-muted-foreground">
                        Peças representam mais de 60% do serviço? Com o split, você não paga 
                        imposto sobre o que é do fornecedor.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Parcele serviços caros</h3>
                      <p className="text-muted-foreground">
                        Manutenções inesperadas ficam mais acessíveis com parcelamento da entrada no link de pagamento em 21 vezes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Gestão simplificada</h3>
                      <p className="text-muted-foreground">
                        Divida entre profissionais, oficina e fornecedores com split customizado.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8" onClick={() => setIsContactModalOpen(true)}>
                  Quero essa Solução
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Profissionais da Construção */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Hammer className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Profissionais da Construção
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Para pedreiros, eletricistas, encanadores e pintores que trabalham em obras 
                  e reformas.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Faltou cimento?</h3>
                      <p className="text-muted-foreground">
                        Seu cliente já deixa uma reserva em cartão com você para não atrasar a obra. Você compra o cimento com recebíveis e sem bitributação.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Split transparente</h3>
                      <p className="text-muted-foreground">
                        Loja recebe pelo material, você recebe pela mão de obra - divisão customizada.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ofereça facilidades</h3>
                      <p className="text-muted-foreground">
                        Cliente pode parcelar a reforma inteira em 21 vezes, aumentando suas chances de fechar negócio.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8" onClick={() => setIsContactModalOpen(true)}>
                  Quero essa Solução
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-muted rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  [Imagem de profissional da construção]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Profissionais de Beleza */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  [Imagem de profissional de beleza]
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Scissors className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Profissionais de Beleza
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Para cabeleireiros, manicures, depiladoras, personals e tosadores de Pets, que trabalham 
                  em salões, espaços compartilhados ou a domicílio.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Serviços na residência</h3>
                      <p className="text-muted-foreground">
                        Cobre na casa do cliente ou na entrega do Pet, sem precisar ir pegar a maquininha do estabelecimento correspondente.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Divisão configurável</h3>
                      <p className="text-muted-foreground">
                        Em pacotes de serviços, configure percentuais para cada profissional receber sua parte.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Fidelize Clientes</h3>
                      <p className="text-muted-foreground">
                        Cobre uma assinatura mensal dos seus clientes para serviços periódicos.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8" onClick={() => setIsContactModalOpen(true)}>
                  Quero essa Solução
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Outros Profissionais */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Outros Profissionais Beneficiados
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A Sucesso Pay também é ideal para diversos outros prestadores de serviços
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Corretores e Advogados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Receba comissões e honorários com split entre parceiros, 
                    imobiliárias e escritórios.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cobre taxas durante processos com link de pagamento</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Parcele o sinal, calção, lance ou entrada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Designers e Arquitetos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Trabalhe com lojas de móveis e construtoras, com divisão inteligente dos projetos.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Receba comissões sem burocracia</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Split transparente entre empresa e profissional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Vendedores e Consultores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Receba por vendas e consultorias com divisão entre fábricas, distribuidores e contratantes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Split automático entre consultores e parceiros</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Repasse direto para distribuidores e indústrias</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cliente parcela consultorias e projetos em até 21x</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para ser protagonista do seu negócio?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Junte-se aos milhares de prestadores de serviços que já inverteram a lógica 
                e conquistaram mais autonomia financeira com a Sucesso Pay.
              </p>
              <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="font-semibold">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default PrestadorServicos;
