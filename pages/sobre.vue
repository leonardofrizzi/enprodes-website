<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Sobre Nós</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Mais de duas décadas de experiência em projetos de engenharia de segurança para infraestrutura crítica no Brasil e no mundo.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div v-reveal>
              <h2 class="text-4xl font-light mb-6">Nossa História</h2>
              <div class="space-y-4 text-muted-foreground font-light">
                <p>
                  Fundada em 2001 como <strong class="text-foreground">Mirabit</strong> pelo <strong class="text-foreground">Especialista Ricardo Miranda</strong>, nossa empresa nasceu com foco em projetos de segurança para túneis, tornando-se referência nacional neste segmento.
                </p>
                <p>
                  Com a evolução do mercado e novas oportunidades, firmamos parceria com a <strong class="text-foreground">Enprodes Management Consultancy B.V.</strong>, expandindo nossa atuação e consolidando nossa presença internacional com escritórios no Brasil, Holanda e Colômbia.
                </p>
                <p>
                  Hoje, a <strong class="text-foreground">Enprodes</strong> atua em diversas áreas da engenharia de segurança: túneis, rodovias, cidades inteligentes, sistemas de monitoramento e infraestrutura crítica, sempre com o mesmo compromisso com excelência técnica que nos trouxe até aqui.
                </p>
              </div>
            </div>

            <div v-reveal="{ x: 24, y: 0 }" class="relative h-96 rounded-2xl border overflow-hidden">
              <img
                src="/sobrenos.webp"
                alt="Sobre a Enprodes"
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="mb-24">
            <div v-reveal class="text-center">
              <h2 class="text-4xl font-light mb-6">Linha do Tempo</h2>
              <p class="text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                Nossa trajetória de crescimento e grandes projetos realizados ao longo dos anos.
              </p>
            </div>
            <div class="max-w-4xl mx-auto">
              <div v-reveal-stagger="{ stagger: 0.15, y: 20 }" class="space-y-8">
                <div class="relative pl-8 border-l-2 border-enprodes-blue/30 pb-8">
                  <div class="absolute -left-2 top-0 h-4 w-4 rounded-full bg-enprodes-blue shadow-lg shadow-enprodes-blue/50"></div>
                  <div class="group bg-white border-2 border-gray-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-x-2 transition-all duration-300 hover:border-enprodes-blue/50 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                    <div class="relative z-10">
                    <div class="flex items-start justify-between mb-3">
                      <h3 class="text-xl font-light group-hover:text-enprodes-blue transition-colors duration-300">Fundação da Mirabit</h3>
                      <span class="text-sm font-medium text-white px-3 py-1 bg-gradient-to-r from-enprodes-blue to-enprodes-blue/80 rounded-full shadow-md">2001</span>
                    </div>
                    <p class="text-muted-foreground font-light">
                      Fundação da empresa pelo Especialista Ricardo Miranda, com foco inicial em projetos de segurança para túneis.
                    </p>
                    </div>
                  </div>
                </div>

                <div class="relative pl-8 border-l-2 border-enprodes-blue/30 pb-8">
                  <div class="absolute -left-2 top-0 h-4 w-4 rounded-full bg-enprodes-blue shadow-lg shadow-enprodes-blue/50"></div>
                  <div class="group bg-white border-2 border-gray-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-x-2 transition-all duration-300 hover:border-enprodes-blue/50 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                    <div class="relative z-10">
                    <div class="flex items-start justify-between mb-3">
                      <h3 class="text-xl font-light group-hover:text-enprodes-blue transition-colors duration-300">Parceria Internacional</h3>
                      <span class="text-sm font-medium text-white px-3 py-1 bg-gradient-to-r from-enprodes-blue to-enprodes-blue/80 rounded-full shadow-md">2008</span>
                    </div>
                    <p class="text-muted-foreground font-light">
                      Parceria estratégica com a Enprodes Management Consultancy B.V., expandindo atuação para mercados internacionais.
                    </p>
                    </div>
                  </div>
                </div>

                <div class="relative pl-8 border-l-2 border-enprodes-blue/30 pb-8">
                  <div class="absolute -left-2 top-0 h-4 w-4 rounded-full bg-enprodes-blue shadow-lg shadow-enprodes-blue/50"></div>
                  <div class="group bg-white border-2 border-gray-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-x-2 transition-all duration-300 hover:border-enprodes-blue/50 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                    <div class="relative z-10">
                    <div class="flex items-start justify-between mb-3">
                      <h3 class="text-xl font-light group-hover:text-enprodes-blue transition-colors duration-300">Expansão Brasil</h3>
                      <span class="text-sm font-medium text-white px-3 py-1 bg-gradient-to-r from-enprodes-blue to-enprodes-blue/80 rounded-full shadow-md">2016</span>
                    </div>
                    <p class="text-muted-foreground font-light">
                      Consolidação no mercado brasileiro com atuação em grandes projetos de infraestrutura rodoviária e urbana.
                    </p>
                    </div>
                  </div>
                </div>

                <div class="relative pl-8 border-l-2 border-enprodes-blue/30">
                  <div class="absolute -left-2 top-0 h-4 w-4 rounded-full bg-enprodes-blue shadow-lg shadow-enprodes-blue/50"></div>
                  <div class="group bg-white border-2 border-gray-200 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-[1.02] hover:-translate-x-2 transition-all duration-300 hover:border-enprodes-blue/50 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                    <div class="relative z-10">
                    <div class="flex items-start justify-between mb-3">
                      <h3 class="text-xl font-light group-hover:text-enprodes-blue transition-colors duration-300">Presente</h3>
                      <span class="text-sm font-medium text-white px-3 py-1 bg-gradient-to-r from-enprodes-blue to-enprodes-blue/80 rounded-full shadow-md">2025</span>
                    </div>
                    <p class="text-muted-foreground font-light">
                      Referência nacional em projetos de engenharia de segurança, com atuação em túneis, rodovias, cidades inteligentes e infraestrutura crítica.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-24">
            <h2 v-reveal class="text-4xl font-light mb-12 text-center">Missão e Visão</h2>
            <div v-reveal-stagger="{ stagger: 0.2 }" class="grid md:grid-cols-2 gap-8 mb-24" style="perspective: 1000px;">
              <div class="group p-8 rounded-2xl border-2 border-enprodes-blue/20 bg-gradient-to-br from-white to-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.25)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue hover:shadow-enprodes-blue/20 relative overflow-hidden" style="transform-style: preserve-3d;">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-enprodes-blue/5 rounded-full blur-3xl group-hover:bg-enprodes-blue/10 transition-all duration-500"></div>
                <div class="relative z-10">
                  <div class="h-14 w-14 rounded-xl bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-enprodes-blue/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-light mb-4 group-hover:text-enprodes-blue transition-colors duration-300">Missão</h3>
                  <p class="text-muted-foreground font-light leading-relaxed">
                    Fornecer soluções de engenharia de segurança inovadoras e confiáveis para infraestruturas críticas, garantindo a proteção de vidas e patrimônios através de tecnologia de ponta e expertise técnica.
                  </p>
                </div>
              </div>

              <div class="group p-8 rounded-2xl border-2 border-enprodes-blue/20 bg-gradient-to-br from-white to-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.25)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue hover:shadow-enprodes-blue/20 relative overflow-hidden" style="transform-style: preserve-3d;">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-enprodes-blue/5 rounded-full blur-3xl group-hover:bg-enprodes-blue/10 transition-all duration-500"></div>
                <div class="relative z-10">
                  <div class="h-14 w-14 rounded-xl bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-enprodes-blue/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-light mb-4 group-hover:text-enprodes-blue transition-colors duration-300">Visão</h3>
                  <p class="text-muted-foreground font-light leading-relaxed">
                    Ser reconhecida como <strong class="text-foreground">referência nacional</strong> em projetos de engenharia de segurança, liderando a transformação digital e sustentável de infraestruturas urbanas e rodoviárias.
                  </p>
                </div>
              </div>
            </div>

            <div v-reveal class="text-center">
              <h2 class="text-4xl font-light mb-6">Nossos Valores</h2>
              <p class="text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                Princípios fundamentais que guiam cada projeto e decisão da Enprodes.
              </p>
            </div>
            <div v-reveal-stagger class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                v-for="value in values"
                :key="value.title"
                :title="value.title"
                :description="value.description"
                :icon="value.icon"
              />
            </div>
          </div>

          <div id="clientes">
            <div v-reveal class="text-center">
              <h2 class="text-4xl font-light mb-6">Nossos Clientes</h2>
              <p class="text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                Trabalhamos com as principais empresas e órgãos públicos do Brasil e do mundo, entregando projetos de alta complexidade e impacto.
              </p>
            </div>
            <div v-reveal-stagger="{ stagger: 0.04, y: 16 }" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <ClientCard v-for="client in clients" :key="client.name" :client="client" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Award, Layers, Shield, Eye, Leaf } from 'lucide-vue-next'

const { list } = useClients()
const clients = list()

const values = [
  {
    title: 'Excelência',
    description: 'Busca contínua pela mais alta qualidade nos projetos',
    icon: Award
  },
  {
    title: 'Inovação',
    description: 'Uso de tecnologias avançadas para soluções eficientes',
    icon: Layers
  },
  {
    title: 'Segurança',
    description: 'Prioridade máxima na segurança dos usuários',
    icon: Shield
  },
  {
    title: 'Transparência',
    description: 'Relacionamentos construídos com confiança e honestidade',
    icon: Eye
  },
  {
    title: 'Sustentabilidade',
    description: 'Compromisso com práticas que preservam o meio ambiente e promovem o desenvolvimento responsável',
    icon: Leaf
  }
]

useHead({
  title: 'Sobre Nós - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Conheça a Enprodes: mais de 20 anos de experiência em projetos de engenharia de segurança para infraestrutura crítica no Brasil e no mundo.'
    }
  ]
})
</script>
