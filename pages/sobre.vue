<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Sobre Nós</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Mais de duas décadas de experiência em projetos de engenharia de segurança para infraestrutura crítica no Brasil e no mundo.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 class="text-4xl font-light mb-6">Nossa História</h2>
              <div class="space-y-4 text-muted-foreground font-light">
                <p>
                  Fundada em 2001 como <strong class="text-foreground">Mirabit</strong> pelo engenheiro Ricardo, nossa empresa nasceu com foco em projetos de segurança para túneis, tornando-se referência nacional neste segmento.
                </p>
                <p>
                  Com a evolução do mercado e novas oportunidades, firmamos parceria com a <strong class="text-foreground">Enprodes Holanda</strong>, expandindo nossa atuação e consolidando nossa presença internacional com escritórios no Brasil, Holanda e Colômbia.
                </p>
                <p>
                  Hoje, a <strong class="text-foreground">Enprodes</strong> atua em diversas áreas da engenharia de segurança: túneis, rodovias, cidades inteligentes, sistemas de monitoramento e infraestrutura crítica, sempre com o mesmo compromisso com excelência técnica que nos trouxe até aqui.
                </p>
              </div>
            </div>

            <div class="relative h-96 rounded-2xl bg-muted/20 border flex items-center justify-center">
              <div class="text-center text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <p class="font-light">Imagem: História da empresa</p>
              </div>
            </div>
          </div>

          <div class="mb-24">
            <h2 class="text-4xl font-light mb-12 text-center">Missão, Visão e Valores</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="p-8 rounded-2xl border bg-card">
                <div class="h-12 w-12 rounded-full bg-enprodes-orange/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-light mb-4">Missão</h3>
                <p class="text-muted-foreground font-light">
                  Fornecer soluções de engenharia de segurança inovadoras e confiáveis para infraestruturas críticas, garantindo a proteção de vidas e patrimônios através de tecnologia de ponta e expertise técnica.
                </p>
              </div>

              <div class="p-8 rounded-2xl border bg-card">
                <div class="h-12 w-12 rounded-full bg-enprodes-orange/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-light mb-4">Visão</h3>
                <p class="text-muted-foreground font-light">
                  Ser reconhecida como referência internacional em projetos de engenharia de segurança, liderando a transformação digital e sustentável de infraestruturas urbanas e rodoviárias.
                </p>
              </div>

              <div class="p-8 rounded-2xl border bg-card">
                <div class="h-12 w-12 rounded-full bg-enprodes-orange/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-light mb-4">Valores</h3>
                <ul class="space-y-2 text-muted-foreground font-light">
                  <li class="flex items-start gap-2">
                    <span class="text-enprodes-orange mt-1">•</span>
                    <span>Excelência técnica</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-enprodes-orange mt-1">•</span>
                    <span>Inovação contínua</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-enprodes-orange mt-1">•</span>
                    <span>Compromisso com segurança</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-enprodes-orange mt-1">•</span>
                    <span>Ética e transparência</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-enprodes-orange mt-1">•</span>
                    <span>Sustentabilidade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mb-24">
            <h2 class="text-4xl font-light mb-6 text-center">Nossos Escritórios</h2>
            <p class="text-center text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Presença global com escritórios estrategicamente localizados para atender nossos clientes.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="p-6 rounded-2xl border bg-card text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 class="font-light text-xl mb-2">Brasil</h3>
                <p class="text-sm text-muted-foreground font-light">Rio de Janeiro</p>
                <p class="text-sm text-muted-foreground font-light">São José dos Campos</p>
              </div>

              <div class="p-6 rounded-2xl border bg-card text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 class="font-light text-xl mb-2">Holanda</h3>
                <p class="text-sm text-muted-foreground font-light">Rotterdam</p>
              </div>

              <div class="p-6 rounded-2xl border bg-card text-center">
                <div class="h-16 w-16 rounded-full bg-enprodes-orange/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 class="font-light text-xl mb-2">Colômbia</h3>
                <p class="text-sm text-muted-foreground font-light">Bogotá</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-4xl font-light mb-6 text-center">Nossos Clientes</h2>
            <p class="text-center text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Trabalhamos com as principais empresas e órgãos públicos do Brasil e do mundo, entregando projetos de alta complexidade e impacto.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div v-for="i in 30" :key="i" class="aspect-square rounded-xl border bg-card hover:shadow-lg transition-all flex items-center justify-center p-4">
                <div class="text-center text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  <p class="text-xs font-light opacity-50">Logo {{ i }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
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
