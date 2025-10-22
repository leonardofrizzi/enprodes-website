<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="relative h-screen flex items-center overflow-hidden">
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div class="absolute inset-0 bg-black/50" />

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl space-y-6">
            <h1 class="text-5xl md:text-7xl font-light text-white leading-tight">
              Transformando <span class="text-enprodes-orange">infraestrutura</span> em realidade
            </h1>

            <p class="text-lg text-white/80 max-w-2xl font-light leading-relaxed">
              Soluções especializadas em túneis, rodovias, pedágios e cidades inteligentes.
            </p>

            <div class="pt-8">
              <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 font-light">
                Ver projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-4xl font-light mb-4">Nossos Serviços</h2>
            <p class="text-lg text-muted-foreground font-light">
              Oferecemos soluções completas de engenharia para infraestrutura crítica
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div
              v-for="service in services"
              :key="service.title"
              class="group space-y-4 p-8 rounded-2xl border bg-card transition-all duration-300 hover:shadow-lg"
            >
              <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <component :is="service.icon" class="h-6 w-6" />
              </div>

              <h3 class="text-xl font-light">{{ service.title }}</h3>
              <p class="text-muted-foreground font-light leading-relaxed">{{ service.description }}</p>
            </div>
          </div>

          <div class="text-center mt-12">
            <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 font-light">
              Ver todos os serviços
            </Button>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div class="space-y-6">
              <h2 class="text-4xl font-light">Quem Somos</h2>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Consultoria independente com sede em Rotterdam, Holanda. Iniciamos as atividades em 2008, com atuação no Brasil desde 2016.
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Especializados em Segurança Operacional e Planejamento de Emergência em túneis e espaços subterrâneos.
              </p>
              <div class="pt-4">
                <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 font-light">
                  Sobre nós
                </Button>
              </div>
            </div>

            <div class="relative h-96 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-muted/10">
              <p class="text-muted-foreground font-light">Imagem aqui</p>
            </div>
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
              <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 h-12 font-light">
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ChevronDown, ArrowRight, Mountain, Route, Building2, Zap, Shield, Users } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Mobilidade',
    description: 'Soluções completas em túneis, rodovias, pedágios, portos e aeroportos.',
    icon: Route
  },
  {
    title: 'Smart Cities',
    description: 'Controle de tráfego, iluminação pública, monitoramento e segurança urbana.',
    icon: Zap
  },
  {
    title: 'Indústrias',
    description: 'Projetos especializados para setores químico, energético, petroquímico e automobilístico.',
    icon: Building2
  },
  {
    title: 'Projetos de Engenharia',
    description: 'Estudos de viabilidade, projetos executivos e metodologia BIM em todas as disciplinas.',
    icon: Users
  }
]

</script>
