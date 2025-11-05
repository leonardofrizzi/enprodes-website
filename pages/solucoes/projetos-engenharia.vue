<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Projetos de Engenharia</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Desenvolvimento completo de projetos executivos multidisciplinares para infraestruturas críticas, desde estudos de viabilidade até projeto legal e metodologia BIM.
            </p>
          </div>

          <div class="mb-24">
            <div class="relative h-96 rounded-2xl bg-muted/20 border flex items-center justify-center mb-12">
              <p class="text-muted-foreground font-light">Imagem: Projetos de Engenharia Overview</p>
            </div>
          </div>

          <div class="p-8 rounded-2xl border bg-card mb-24">
            <h2 class="text-3xl font-light mb-6 text-center">Desenvolvimento de Projetos</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Estudo de Viabilidade</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Análise técnica e econômica para avaliar a viabilidade do projeto
                </p>
              </div>

              <div class="text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="9" x2="15" y2="9"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                    <line x1="9" y1="12" x2="15" y2="12"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Projeto Básico</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Desenvolvimento das soluções técnicas e dimensionamentos
                </p>
              </div>

              <div class="text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <path d="M12 18v-6"/>
                    <path d="m9 15 3 3 3-3"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Projeto Legal</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Documentação para aprovações e licenciamentos
                </p>
              </div>

              <div class="text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Projeto Executivo</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Detalhamento completo para execução da obra
                </p>
              </div>

              <div class="text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">As Built</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Documentação final conforme construído e entregue
                </p>
              </div>

              <div class="text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Metodologia BIM</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Modelagem 3D e gestão integrada de informações do projeto
                </p>
              </div>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Automação e Supervisório</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos de automação industrial e predial, sistemas SCADA e supervisórios. Desenvolvimento de arquiteturas de automação para gerenciamento centralizado de instalações, com integração de sensores, controladores e interfaces homem-máquina (IHM).
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Elétrica e Eletrônica</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos elétricos de baixa, média e alta tensão. Dimensionamento de subestações, quadros elétricos, sistemas eletrônicos, CFTV, controle de acesso, telecomunicações e infraestrutura de TI.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Mecânica</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos mecânicos para equipamentos, tubulações, suportes e estruturas metálicas. Dimensionamento de sistemas mecânicos, análise de cargas, vibrações e especificação de materiais para ambientes industriais.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Ventilação</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos de ventilação natural e mecânica, exaustão e climatização. Cálculo de vazões, dimensionamento de dutos, seleção de equipamentos e sistemas de controle. Soluções para qualidade do ar e conforto ambiental.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Combate a Incêndio</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos de sistemas de proteção contra incêndio: sprinklers, hidrantes, sistemas de espuma, gases e detecção automática. Desenvolvimento conforme normas nacionais e internacionais. Análise de risco e estratégias de proteção.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Estrutural</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos estruturais em concreto armado, estruturas metálicas e mistas. Análise estrutural, dimensionamento de fundações, contenções e obras especiais. Projetos de reforço e adequação de edificações existentes.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Arquitetônico</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos arquitetônicos para edificações técnicas, salas de controle, subestações e instalações operacionais. Estudos de layout, ergonomia, acessibilidade e conforto ambiental. Integração com projetos complementares.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Hidráulico</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos hidráulicos e hidrossanitários, sistemas de água fria, água quente, esgoto, águas pluviais e drenagem. Dimensionamento de tubulações, reservatórios e sistemas de bombeamento.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Rede e Transmissão de Dados</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projetos de infraestrutura de rede e telecomunicações. Cabeamento estruturado, fibra óptica, sistemas wireless, racks técnicos e integração de sistemas. Desenvolvimento de arquiteturas de rede e protocolos de comunicação.
              </p>
            </div>
          </div>

          <div class="p-8 rounded-2xl border bg-card mb-24">
            <h2 class="text-3xl font-light mb-6">Diferenciais dos Nossos Projetos</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Metodologia BIM</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Utilização de Building Information Modeling para maior precisão e coordenação entre disciplinas.
                </p>
              </div>

              <div>
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Personalizado</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Solução atendida conforme sua necessidade, com adaptações específicas para seu projeto.
                </p>
              </div>

              <div>
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Equipe Multidisciplinar</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Profissionais especializados em todas as disciplinas de engenharia.
                </p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <NuxtLink to="/servicos" class="inline-flex items-center text-enprodes-blue hover:text-enprodes-blue-dark font-light">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar para Serviços
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-24 bg-enprodes-gray">
        <div class="container mx-auto px-6 text-center">
          <div class="max-w-3xl mx-auto space-y-6">
            <h2 class="text-4xl font-light text-white">
              Vamos conversar sobre seu projeto?
            </h2>
            <p class="text-xl text-white/80 font-light">
              Entre em contato com nossa equipe de especialistas.
            </p>
            <div class="pt-4">
              <NuxtLink to="/contato">
                <Button class=" px-8 h-12 font-light">
                  Entrar em contato
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

useHead({
  title: 'Projetos de Engenharia - Serviços - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Projetos executivos multidisciplinares: elétrica, mecânica, HVAC, automação, estruturas, arquitetura e mais. Metodologia BIM e conformidade normativa.'
    }
  ]
})
</script>
