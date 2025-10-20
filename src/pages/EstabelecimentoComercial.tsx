import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Sofa, 
  Plane, 
  Wrench,
  Car,
  ShoppingBag,
  Dumbbell,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const EstabelecimentoComercial = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Soluções para Empresas e Comércios
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Plataforma completa para gerenciar seu estabelecimento com eficiência operacional e financeira.
            </p>
            <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="font-semibold">
              Falar com Especialista
            </Button>
          </div>
        </section>

        {/* Clínicas de Saúde, Estética, Dentárias, Petshops e Veterinárias */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Clínicas de Saúde, Estética, Dentárias, Petshops e Veterinárias
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Solução ideal para clínicas que trabalham com diversos profissionais, como médicos, dentistas, 
                  fisioterapeutas, esteticistas, veterinários, tosadores e adestradores.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Evite bitributação nos repasses</h3>
                      <p className="text-muted-foreground">
                        Com o split configurado, cada profissional recebe diretamente sua parte, 
                        eliminando a dupla tributação nos repasses.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Link de Pagamento em até 21x</h3>
                      <p className="text-muted-foreground">
                        Parcele tratamentos e procedimentos por link em até 21 vezes, 
                        facilitando cobranças de entradas e sinais.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Cobre por assinatura</h3>
                      <p className="text-muted-foreground">
                        Fidelize clientes cobrando mensalidades para procedimentos estéticos, 
                        atendimentos e tosa periódica de PETs, manutenção de aparelhos, entre outros.
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
                  [Imagem de clínica/saúde]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lojas de Móveis, Decoração e Materiais de Construção */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  [Imagem de loja de móveis/decoração]
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sofa className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Lojas de Móveis, Decoração e Materiais de Construção
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  O Split de Recebíveis beneficia principalmente as lojas que trabalham em parceria com designers 
                  de interiores, arquitetos, montadores, instaladores, entregadores, pedreiros, eletricistas, 
                  bombeiros hidráulicos e pintores.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Cobre um sinal ou parte do projeto com boletos</h3>
                      <p className="text-muted-foreground">
                        Os boletos gerados também geram recebíveis em D+1 (no dia seguinte ao pagamento), 
                        que podem ser divididos.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Parcelamento em até 21x para grandes compras</h3>
                      <p className="text-muted-foreground">
                        Ofereça aos clientes a possibilidade de parcelar grandes compras como móveis planejados 
                        e projetos de decoração em até 21 vezes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Elimine a complexidade de múltiplos pagamentos</h3>
                      <p className="text-muted-foreground">
                        Receba uma única vez e o sistema divide entre todos os envolvidos 
                        no projeto, simplificando a gestão financeira.
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

        {/* Agências de Viagem, Turismo e Hotéis */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Plane className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Agências de Viagem, Turismo e Hotéis
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  A solução de Split de Recebíveis é crucial para as agências e hotéis, pois permite que dividam 
                  os pagamentos de forma eficiente com guias turísticos, empresas de transporte, parceiros e 
                  outros fornecedores, agilizando o processo e evitando a bitributação.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Divida com guias, transportes e parceiros</h3>
                      <p className="text-muted-foreground">
                        Configure o split para dividir os pagamentos com guias turísticos, 
                        empresas de transporte, transfers e demais parceiros do roteiro.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Evite bitributação - pague impostos apenas sobre sua margem</h3>
                      <p className="text-muted-foreground">
                        Com o split, você paga impostos apenas sobre sua comissão ou margem de lucro, 
                        não sobre o valor total que será repassado aos fornecedores.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Parcele pacotes de viagem em até 21x</h3>
                      <p className="text-muted-foreground">
                        Facilite o acesso dos clientes a viagens dos sonhos oferecendo parcelamento 
                        facilitado em até 21 vezes.
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
                  [Imagem de agência/turismo]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Centros Automotivos e Oficinas */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center p-8">
                  [Imagem de centro automotivo/oficina]
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-12 w-12 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Centros Automotivos e Oficinas
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  A utilização do Split de Recebíveis permite dividir os pagamentos com mecânicos, eletricistas, 
                  fornecedores de peças e outros profissionais.
                </p>
                
                {/* Alerta de Bitributação */}
                <div className="bg-destructive/10 border-l-4 border-destructive rounded-lg p-4 mb-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-destructive mb-2">Atenção à Bitributação!</h3>
                      <p className="text-sm text-muted-foreground">
                        Neste segmento, o custo das peças geralmente representa mais de 60% do valor da transação. 
                        <strong> O resultado: um faturamento inflado e base tributável muito acima daquele valor que 
                        realmente ficou no caixa da oficina.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Split entre oficina, mecânicos e fornecedores</h3>
                      <p className="text-muted-foreground">
                        Divida os pagamentos entre a oficina, os mecânicos, eletricistas 
                        e fornecedores de peças e autopeças.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Elimine a bitributação sobre as peças</h3>
                      <p className="text-muted-foreground">
                        Não pague impostos sobre o valor das peças que são do fornecedor. Com o split, 
                        você tributa apenas sobre a mão de obra que realmente é sua receita.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Cliente parcela manutenções em até 21x</h3>
                      <p className="text-muted-foreground">
                        Manutenções inesperadas ficam mais acessíveis quando o cliente pode parcelar 
                        o pagamento em até 21 vezes.
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

        {/* Outros Segmentos Beneficiados */}
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
              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Car className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Split de Pagamentos</Badge>
                  </div>
                  <CardTitle>Revenda de Carros</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Gestão inteligente de consignação para carros deixados em demonstração. 
                    Split automático para comissão dos donos dos veículos após a venda.
                  </CardDescription>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Divida com proprietários dos carros consignados</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cliente parcela entrada em até 21x</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Elimine bitributação na comissão</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <ShoppingBag className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Consignação Fácil</Badge>
                  </div>
                  <CardTitle>Brechós e Outlets</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Solução perfeita para consignação. Marcas e pessoas deixam roupas em consignação 
                    e recebem automaticamente após cada venda.
                  </CardDescription>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Split após cada venda</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gestão facilitada de múltiplos consignantes</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cliente parcela compras em até 21x</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Dumbbell className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">Ecossistema Completo</Badge>
                  </div>
                  <CardTitle>Academias e Fitness</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Gestão completa do ecossistema fitness com Split para personal trainers, 
                    lanchonetes fit e venda de suplementos.
                  </CardDescription>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Split de comissões com personal trainers</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Divisão com lanchonetes fit e suplementos</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Parcele planos anuais em até 21x</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Potencialize a gestão financeira do seu estabelecimento
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como a Sucesso Pay pode eliminar a bitributação 
              e facilitar seus pagamentos
            </p>
            <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="font-semibold">
              Falar com Especialista
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default EstabelecimentoComercial;