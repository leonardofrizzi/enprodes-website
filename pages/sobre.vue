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
            <h2 class="text-4xl font-light mb-12 text-center">Missão e Visão</h2>
            <div class="grid md:grid-cols-2 gap-8 mb-24" style="perspective: 1000px;">
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

            <h2 class="text-4xl font-light mb-6 text-center">Nossos Valores</h2>
            <p class="text-center text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Princípios fundamentais que guiam cada projeto e decisão da Enprodes.
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="flex items-start gap-4 relative z-10">
                  <div class="h-12 w-12 rounded-lg bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-enprodes-blue/30 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-light text-lg mb-2 group-hover:text-enprodes-blue transition-colors duration-300">Excelência</h4>
                    <p class="text-sm text-muted-foreground font-light">
                      Busca contínua pela mais alta qualidade nos projetos
                    </p>
                  </div>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="flex items-start gap-4 relative z-10">
                  <div class="h-12 w-12 rounded-lg bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-enprodes-blue/30 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-light text-lg mb-2 group-hover:text-enprodes-blue transition-colors duration-300">Inovação</h4>
                    <p class="text-sm text-muted-foreground font-light">
                      Uso de tecnologias avançadas para soluções eficientes
                    </p>
                  </div>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="flex items-start gap-4 relative z-10">
                  <div class="h-12 w-12 rounded-lg bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-enprodes-blue/30 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-light text-lg mb-2 group-hover:text-enprodes-blue transition-colors duration-300">Segurança</h4>
                    <p class="text-sm text-muted-foreground font-light">
                      Prioridade máxima na segurança dos usuários
                    </p>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2 lg:col-span-3 flex justify-center">
                <div class="grid md:grid-cols-2 gap-6 w-full lg:w-2/3">
                  <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                    <div class="flex items-start gap-4 relative z-10">
                      <div class="h-12 w-12 rounded-lg bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-enprodes-blue/30 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-light text-lg mb-2 group-hover:text-enprodes-blue transition-colors duration-300">Transparência</h4>
                        <p class="text-sm text-muted-foreground font-light">
                          Relacionamentos construídos com confiança e honestidade
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                    <div class="flex items-start gap-4 relative z-10">
                      <div class="h-12 w-12 rounded-lg bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-md flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-enprodes-blue/30 group-hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      </div>
                      <div>
                        <h4 class="font-light text-lg mb-2 group-hover:text-enprodes-blue transition-colors duration-300">Sustentabilidade</h4>
                        <p class="text-sm text-muted-foreground font-light">
                          Compromisso com práticas que preservam o meio ambiente e promovem o desenvolvimento responsável
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-24">
            <h2 class="text-4xl font-light mb-6 text-center">Linha do Tempo</h2>
            <p class="text-center text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Nossa trajetória de crescimento e grandes projetos realizados ao longo dos anos.
            </p>
            <div class="max-w-4xl mx-auto">
              <div class="space-y-8">
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
