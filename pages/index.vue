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
          <div ref="heroContent" class="max-w-4xl space-y-6">
            <h1 class="text-5xl md:text-7xl font-light text-white leading-tight">
              Engenharia de confiança. Soluções de excelência.
            </h1>

            <div class="pt-8">
              <a href="#projetos">
                <Button class="px-8 font-light">
                  Ver projetos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-4xl font-light mb-4">Nossas Soluções</h2>
            <p class="text-lg text-muted-foreground font-light">
              Oferecemos soluções completas de engenharia para infraestrutura crítica
            </p>
          </div>

          <div v-reveal-stagger class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="service in services"
              :key="service.title"
              class="group space-y-4 p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10 space-y-4">
              <div class="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-300">
                <component :is="service.icon" class="h-6 w-6" />
              </div>

              <h3 class="text-xl font-light group-hover:text-enprodes-blue transition-colors duration-300">{{ service.title }}</h3>
              <p class="text-muted-foreground font-light leading-relaxed">{{ service.description }}</p>
              </div>
            </div>
          </div>

          <div v-reveal class="text-center mt-12">
            <NuxtLink to="/solucoes">
              <Button class="px-8 font-light">
                Ver todas as soluções
              </Button>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div v-reveal class="space-y-6">
              <h2 class="text-4xl font-light">Quem Somos</h2>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Consultoria independente com sede em Rotterdam, Holanda. Iniciamos as atividades em 2008, com atuação no Brasil desde 2016.
              </p>
              <p class="text-lg text-muted-foreground leading-relaxed">
                Especializados em Segurança Operacional e Planejamento de Emergência em túneis e espaços subterrâneos.
              </p>
              <div class="pt-4">
                <NuxtLink to="/sobre">
                  <Button class="px-8 font-light">
                    Sobre nós
                  </Button>
                </NuxtLink>
              </div>
            </div>

            <div v-reveal="{ x: 24, y: 0 }" class="relative h-96 rounded-2xl border overflow-hidden">
              <img
                src="/quemsomos.webp"
                alt="Quem somos - Enprodes"
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" class="py-24 bg-gray-50 scroll-mt-20">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center max-w-2xl mx-auto mb-12">
            <h2 class="text-4xl font-light mb-4">Nossos Projetos</h2>
            <p class="text-lg text-muted-foreground font-light">
              Uma seleção de projetos entregues pela Enprodes ao longo dos anos.
            </p>
          </div>

          <div v-reveal>
            <ProjectsCarousel />
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center mb-12">
            <h2 class="text-4xl font-light mb-4">Nossos Clientes</h2>
            <p class="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Trabalhamos com as principais empresas e órgãos públicos do Brasil e do mundo
            </p>
          </div>

          <div v-reveal>
            <ClientsCarousel />
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Route, Building2, Zap, Users } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const heroContent = ref<HTMLElement | null>(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()
  if (!$gsap || !heroContent.value) return
  const children = Array.from(heroContent.value.children) as HTMLElement[]
  $gsap.from(children, {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.18,
    ease: 'power2.out',
    delay: 0.2
  })
})

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
