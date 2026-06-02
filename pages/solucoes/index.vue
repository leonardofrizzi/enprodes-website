<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Nossas Soluções</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Soluções completas em engenharia de segurança para infraestrutura crítica, do planejamento à operação.
            </p>
          </div>

          <div v-reveal-stagger="{ stagger: 0.1 }" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <div
              v-for="service in services"
              :key="service.slug"
              class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-[300px] -mt-6 -mx-6 mb-6 overflow-hidden bg-muted/20 flex items-center justify-center">
                <img
                  v-if="service.image"
                  :src="service.image"
                  :alt="service.title"
                  :class="['absolute inset-0 h-full w-full object-cover', service.imagePosition]"
                  loading="lazy"
                />
                <p v-else class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>

              <h2 class="text-2xl font-light mb-4 group-hover:text-enprodes-blue transition-colors duration-300">
                {{ service.title }}
              </h2>

              <p class="text-muted-foreground font-light leading-relaxed mb-6">
                {{ service.description }}
              </p>

              <NuxtLink :to="`/solucoes/${service.slug}`">
                <Button class=" font-light">
                  Saiba mais
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const services: { slug: string; title: string; description: string; image: string; imagePosition?: string }[] = [
  {
    slug: 'engenharia-proprietario',
    title: 'Engenharia de Proprietário',
    description: 'Consultoria técnica especializada representando os interesses do proprietário, com gestão de projetos, análise técnica, fiscalização e validação de soluções de engenharia.',
    image: '/engprop.webp',
    imagePosition: 'object-left'
  },
  {
    slug: 'projetos-engenharia',
    title: 'Projetos de Engenharia',
    description: 'Desenvolvimento de projetos executivos multidisciplinares para infraestruturas críticas, desde estudos de viabilidade até metodologia BIM, com foco em segurança e eficiência operacional.',
    image: '/projeng.webp'
  },
  {
    slug: 'atividades-campo',
    title: 'Atividades de Campo',
    description: 'Levantamentos topográficos, inspeções técnicas, comissionamento de sistemas, testes de campo e validação de instalações de equipamentos de segurança.',
    image: '/atividadesdecampo.webp'
  },
  {
    slug: 'documentacao-treinamentos',
    title: 'Documentação de Segurança e Treinamentos',
    description: 'Elaboração de documentação técnica de segurança, análises de risco, planos de emergência e programas de capacitação operacional para equipes técnicas.',
    image: '/documentacao/det.webp'
  },
  {
    slug: 'manuais-procedimentos',
    title: 'Manuais e Procedimentos de Operação e Manutenção',
    description: 'Desenvolvimento de manuais técnicos, procedimentos operacionais padrão (POPs), rotinas de manutenção preventiva e corretiva para sistemas de segurança.',
    image: '/manuais/manuais.webp'
  }
]

useHead({
  title: 'Soluções - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Conheça as soluções da Enprodes: Engenharia de Proprietário, Projetos de Engenharia, Atividades de Campo e muito mais. Soluções completas em engenharia de segurança.'
    }
  ]
})
</script>
