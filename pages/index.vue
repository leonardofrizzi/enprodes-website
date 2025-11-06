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
              Engenharia de confiança. Soluções de excelência.
            </h1>

            <div class="pt-8">
              <Button class="px-8 font-light">
                Ver projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-4xl font-light mb-4">Nossas Soluções</h2>
            <p class="text-lg text-muted-foreground font-light">
              Oferecemos soluções completas de engenharia para infraestrutura crítica
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div class="text-center mt-12">
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
            <div class="space-y-6">
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

            <div class="relative h-96 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-muted/10">
              <p class="text-muted-foreground font-light">Imagem aqui</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-light mb-4">Nossos Clientes</h2>
            <p class="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Trabalhamos com as principais empresas e órgãos públicos do Brasil e do mundo
            </p>
          </div>

          <div class="relative">
            <div class="max-w-6xl mx-auto">
              <Swiper
                :modules="[SwiperNavigation, SwiperAutoplay]"
                :slides-per-view="1"
                :space-between="20"
                :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                :navigation="{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }"
                :breakpoints="{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 }
                }"
                class="!px-0"
              >
              <SwiperSlide v-for="client in clients" :key="client.name">
                <NuxtLink to="/sobre#clientes">
                  <div class="group aspect-square rounded-xl border-2 border-gray-200 bg-white hover:shadow-lg hover:border-enprodes-blue/50 transition-all duration-300 flex items-center justify-center p-6 relative overflow-hidden cursor-pointer">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      v-if="client.logo"
                      :src="client.logo"
                      :alt="client.name"
                      class="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
                    />
                    <div v-else class="text-center text-muted-foreground relative z-10">
                      <div class="h-12 w-12 mx-auto mb-2 opacity-30 flex items-center justify-center">
                        <Building2 class="h-full w-full" />
                      </div>
                      <p class="text-xs font-light opacity-50">{{ client.name }}</p>
                    </div>
                  </div>
                </NuxtLink>
              </SwiperSlide>
              </Swiper>
            </div>

            <button
              class="swiper-button-prev-custom hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center transition-all shadow-md hover:shadow-lg"
            >
              <ChevronLeft class="w-5 h-5" />
            </button>
            <button
              class="swiper-button-next-custom hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center transition-all shadow-md hover:shadow-lg"
            >
              <ChevronRight class="w-5 h-5" />
            </button>
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
                <Button class="px-8 h-12 font-light">
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
import { Route, Building2, Zap, Users, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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

const clients = [
  { name: 'Arteris', logo: '/arteris.webp' },
  { name: 'CCR', logo: '/ccr.webp' },
  { name: 'Tamoios', logo: '/tamoios.webp' },
  { name: 'Odebrecht', logo: '/odebrecht.webp' },
  { name: 'Smartluz', logo: '/smartluz.webp' },
  { name: 'Viário', logo: '/viario.webp' },
  { name: 'Nova 381', logo: '/nova381.webp' },
  { name: 'Motiva', logo: '/motiva.webp' },
  { name: 'Ecorodovias', logo: '/ecorodovias.webp' },
  { name: 'Porto Novo', logo: '/portonovo.webp' },
  { name: 'Rota', logo: '/rota.webp' },
  { name: 'Coqueiros', logo: '/coqueiros.webp' },
  { name: 'Rio', logo: '/rio.webp' },
  { name: 'Paraná', logo: '/parana.webp' },
  { name: 'SPMar', logo: '/spmar.webp' },
  { name: 'Via 040', logo: '/via040.webp' },
  { name: 'Metrô Rio', logo: '/metrorio.svg' },
  { name: 'Bahia', logo: '/bahia.webp' },
  { name: 'Lamsac', logo: '/lamsac.webp' },
  { name: 'Lamsa', logo: '/lamsa.webp' },
  { name: 'Viapar', logo: '/viapar.webp' },
  { name: 'CRT', logo: '/crt.webp' },
  { name: 'Eterc', logo: '/eterc.webp' },
  { name: 'EGTC', logo: '/egtc.webp' },
  { name: 'BR', logo: '/br.webp' }
]

</script>
