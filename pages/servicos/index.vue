<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Nossos Serviços</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Soluções completas em engenharia de segurança para infraestrutura crítica, do planejamento à operação.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div
              v-for="service in services"
              :key="service.slug"
              class="p-6 rounded-2xl border bg-card"
            >
              <div class="relative h-48 rounded-xl bg-muted/20 border mb-6 flex items-center justify-center">
                <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>

              <h2 class="text-2xl font-light mb-4">
                {{ service.title }}
              </h2>

              <p class="text-muted-foreground font-light leading-relaxed mb-6">
                {{ service.description }}
              </p>

              <NuxtLink :to="`/servicos/${service.slug}`">
                <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white font-light">
                  Saiba mais
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </NuxtLink>
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
              <NuxtLink to="/contato">
                <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 h-12 font-light">
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

const services = [
  {
    slug: 'smart-cities',
    title: 'Smart Cities',
    description: 'Soluções integradas para cidades inteligentes, incluindo mobilidade urbana, controle de tráfego, sinalização semafórica, monitoramento, iluminação pública e infraestrutura de comunicação.'
  },
  {
    slug: 'projetos-engenharia',
    title: 'Projetos de Engenharia',
    description: 'Desenvolvimento de projetos executivos de engenharia para infraestruturas críticas, com foco em segurança, eficiência operacional e conformidade normativa.'
  },
  {
    slug: 'tuneis',
    title: 'Túneis',
    description: 'Projetos especializados de segurança para túneis rodoviários e metroviários, incluindo sistemas de ventilação, detecção de incêndio, CFTV e comunicação de emergência.'
  },
  {
    slug: 'pedagios',
    title: 'Pedágios',
    description: 'Sistemas completos para praças de pedágio, incluindo controle de acesso, arrecadação eletrônica, monitoramento e integração com sistemas de gestão de rodovias.'
  },
  {
    slug: 'iluminacao-publica',
    title: 'Iluminação Pública',
    description: 'Projetos de iluminação pública eficiente e sustentável, com tecnologia LED, automação, telegestão e integração com sistemas de smart cities.'
  },
  {
    slug: 'its',
    title: 'Sistemas de Transporte Inteligente (ITS)',
    description: 'Soluções ITS para gestão de tráfego, incluindo painéis de mensagem variável, sensores de tráfego, câmeras de monitoramento e centrais de controle operacional.'
  },
  {
    slug: 'redes-transmissao',
    title: 'Rede de Transmissão de Dados',
    description: 'Infraestrutura de rede para transmissão de dados em alta velocidade, fibra óptica, sistemas wireless e integração de sistemas de segurança e monitoramento.'
  },
  {
    slug: 'atividades-campo',
    title: 'Atividades de Campo',
    description: 'Levantamentos topográficos, inspeções técnicas, comissionamento de sistemas, testes de campo e validação de instalações de equipamentos de segurança.'
  },
  {
    slug: 'documentacao-treinamentos',
    title: 'Documentação de Segurança e Treinamentos',
    description: 'Elaboração de documentação técnica de segurança, análises de risco, planos de emergência e programas de capacitação operacional para equipes técnicas.'
  },
  {
    slug: 'manuais-procedimentos',
    title: 'Manuais e Procedimentos de Operação e Manutenção',
    description: 'Desenvolvimento de manuais técnicos, procedimentos operacionais padrão (POPs), rotinas de manutenção preventiva e corretiva para sistemas de segurança.'
  }
]

useHead({
  title: 'Serviços - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Conheça os serviços da Enprodes: Smart Cities, Túneis, ITS, Iluminação Pública e muito mais. Soluções completas em engenharia de segurança.'
    }
  ]
})
</script>
