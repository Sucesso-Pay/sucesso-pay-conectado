import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  UtensilsCrossed, 
  Store,
  ShoppingBag,
  TrendingUp,
  Shield,
  DollarSign,
  Clock,
  Users,
  CheckCircle2,
  Percent,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const EstabelecimentoComercial = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const mainBenefits = [
    {
      icon: DollarSign,
      title: "Aumente suas Vendas",
      description: "Ofereça parcelamento em até 21x no link de pagamento e facilite a compra dos seus clientes."
    },
    {
      icon: Shield,
      title: "Split Inteligente",
      description: "Divida recebíveis automaticamente com fornecedores, parceiros e franqueadores."
    },
    {
      icon: Clock,
      title: "Gestão Completa",
      description: "Portal financeiro integrado para controlar todas as suas vendas e recebimentos."
    },
    {
      icon: TrendingUp,
      title: "Antecipação Flexível",
      description: "Antecipe seus recebíveis quando precisar de capital de giro para o negócio."
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
              Soluções Completas para seu Estabelecimento Comercial
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Modernize seu negócio com tecnologia de pagamentos, gestão financeira e split inteligente. 
              Venda mais, gerencie melhor e cresça com a Sucesso Pay.
            </p>
            <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="font-semibold">
              Quero Modernizar meu Negócio
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

        {/* Revenda de Carros */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Revenda de Carros e Motos
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Facilite a venda de veículos com parcelamento flexível e gestão completa dos recebíveis.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Entrada parcelada em 21x</h3>
                      <p className="text-muted-foreground">
                        Seu cliente parcela a entrada no link de pagamento e você recebe o valor total para negociar com o banco.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Split com oficinas parceiras</h3>
                      <p className="text-muted-foreground">
                        Divida automaticamente comissões com mecânicos, despachantes e seguradoras.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Venda de acessórios</h3>
                      <p className="text-muted-foreground">
                        Ofereça acessórios, seguros e serviços adicionais com pagamento integrado.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Gestão de estoque financeiro</h3>
                      <p className="text-muted-foreground">
                        Acompanhe todos os recebíveis de cada veículo vendido no portal de gestão.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8" onClick={() => setIsContactModalOpen(true)}>
                  Quero essa Solução
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-muted rounded-lg aspect-square flex items-center justify-center">
                <Car className="h-32 w-32 text-muted-foreground/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Restaurantes e Bares */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <UtensilsCrossed className="h-32 w-32 text-muted-foreground/20" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <UtensilsCrossed className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Restaurantes e Bares
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Modernize os pagamentos do seu estabelecimento e aumente o ticket médio com tecnologia.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Maquininhas modernas</h3>
                      <p className="text-muted-foreground">
                        Aceite todos os tipos de pagamento: cartão, Pix, QR Code e aproximação.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Split com delivery</h3>
                      <p className="text-muted-foreground">
                        Divida automaticamente o valor com os motoboys e apps de entrega.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Gestão de garçons</h3>
                      <p className="text-muted-foreground">
                        Configure splits para gorjetas e comissões de forma transparente.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Controle total</h3>
                      <p className="text-muted-foreground">
                        Portal de gestão com relatórios detalhados de vendas, turnos e períodos.
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

        {/* Brechós e Outlets */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Brechós e Outlets
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Venda mais com facilidades de pagamento e gestão inteligente de consignações.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Consignação automatizada</h3>
                      <p className="text-muted-foreground">
                        Split automático entre a loja e os consignantes na hora da venda.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Parcelamento sem juros</h3>
                      <p className="text-muted-foreground">
                        Ofereça parcelas sem juros no link de pagamento e aumente suas vendas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Venda online</h3>
                      <p className="text-muted-foreground">
                        Crie links de pagamento para vender pelas redes sociais com segurança 3DS.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Relatórios por consignante</h3>
                      <p className="text-muted-foreground">
                        Acompanhe o desempenho de cada consignante no portal de gestão.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="mt-8" onClick={() => setIsContactModalOpen(true)}>
                  Quero essa Solução
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-muted rounded-lg aspect-square flex items-center justify-center">
                <ShoppingBag className="h-32 w-32 text-muted-foreground/20" />
              </div>
            </div>
          </div>
        </section>

        {/* Lojas de Varejo */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <Store className="h-32 w-32 text-muted-foreground/20" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Store className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Lojas de Varejo em Geral
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Soluções completas para lojas de roupas, calçados, eletrônicos, móveis e muito mais.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Múltiplas formas de pagamento</h3>
                      <p className="text-muted-foreground">
                        Maquininhas com tecnologia de ponta para aceitar todos os meios de pagamento.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Vendas online e físicas</h3>
                      <p className="text-muted-foreground">
                        Links de pagamento 3DS para vender pelo WhatsApp, Instagram e Facebook.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Split com vendedores</h3>
                      <p className="text-muted-foreground">
                        Divida comissões automaticamente com sua equipe de vendas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Antecipação quando precisar</h3>
                      <p className="text-muted-foreground">
                        Antecipe seus recebíveis para repor estoque ou investir no negócio.
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

        {/* Outros Estabelecimentos */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Outros Segmentos Beneficiados
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A Sucesso Pay também é ideal para diversos outros tipos de estabelecimentos comerciais
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Joalherias e Óticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Facilite a compra de produtos de alto valor com parcelamento flexível.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Parcele em até 21x sem entrada</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Links de pagamento para vendas online</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Split com representantes e franquias</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Farmácias e Pet Shops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Gestão completa de pagamentos e recorrências para produtos e serviços.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Assinaturas para medicamentos contínuos</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Delivery com pagamento integrado</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Parcelamento de tratamentos veterinários</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <Percent className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Supermercados e Mercearias</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Tecnologia de pagamento rápida e eficiente para alto volume de transações.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pagamento por aproximação ultrarrápido</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gestão de múltiplos caixas</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Relatórios por turno e operador</span>
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
                Pronto para modernizar seu estabelecimento?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Junte-se aos milhares de estabelecimentos comerciais que já crescem com as 
                soluções completas da Sucesso Pay.
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

export default EstabelecimentoComercial;
