<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Projetos de Engenharia</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Desenvolvimento completo de projetos executivos multidisciplinares para infraestruturas críticas, desde estudos de viabilidade até projeto legal e metodologia BIM.
            </p>
          </div>

          <div class="mb-24">
            <div v-reveal class="relative h-96 rounded-2xl border overflow-hidden mb-12">
              <img
                src="/projeng.webp"
                alt="Projetos de Engenharia - Enprodes"
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div v-reveal class="group p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-enprodes-blue/50 relative overflow-hidden mb-24">
            <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
            <div class="relative z-10">
            <h2 class="text-3xl font-light mb-6 text-center">Desenvolvimento de Projetos</h2>
            <div v-reveal-stagger="{ stagger: 0.08, delay: 0.1 }" class="grid md:grid-cols-3 gap-8">
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
          </div>

          <div v-reveal-stagger="{ stagger: 0.06 }" class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden bg-muted/20">
                <img
                  src="/eng/aes.svg"
                  alt="Automação e Supervisório"
                  class="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Automação e Supervisório</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos de automação industrial e predial, sistemas SCADA e supervisórios. Desenvolvimento de arquiteturas de automação para gerenciamento centralizado de instalações.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden bg-muted/20">
                <img
                  src="/eng/eee.svg"
                  alt="Elétrica e Eletrônica"
                  class="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Elétrica e Eletrônica</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos elétricos de baixa, média e alta tensão. Dimensionamento de subestações, quadros elétricos, sistemas eletrônicos, CFTV e infraestrutura de TI.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden bg-muted/20">
                <img
                  src="/eng/me.svg"
                  alt="Mecânica"
                  class="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Mecânica</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos mecânicos para equipamentos, tubulações, suportes e estruturas metálicas. Dimensionamento de sistemas mecânicos e análise de cargas.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden bg-muted/20">
                <img
                  src="/eng/ve.svg"
                  alt="Ventilação"
                  class="absolute inset-0 h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Ventilação</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos de ventilação natural e mecânica, exaustão e climatização. Cálculo de vazões, dimensionamento de dutos e seleção de equipamentos.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 rounded-xl bg-muted/20 border flex items-center justify-center mb-4">
                <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Combate a Incêndio</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos de sistemas de proteção contra incêndio: sprinklers, hidrantes, sistemas de espuma, gases e detecção automática conforme normas.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 rounded-xl bg-muted/20 border flex items-center justify-center mb-4">
                <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Estrutural</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos estruturais em concreto armado, estruturas metálicas e mistas. Análise estrutural, dimensionamento de fundações e contenções.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 rounded-xl bg-muted/20 border flex items-center justify-center mb-4">
                <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Arquitetônico</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos arquitetônicos para edificações técnicas, salas de controle e subestações. Estudos de layout, ergonomia e acessibilidade.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 rounded-xl bg-muted/20 border flex items-center justify-center mb-4">
                <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Hidráulico</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos hidráulicos e hidrossanitários, sistemas de água fria, água quente, esgoto, águas pluviais e drenagem.
              </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
              <div class="relative h-48 rounded-xl bg-muted/20 border flex items-center justify-center mb-4">
                <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Rede e Transmissão de Dados</h2>
              <p class="text-muted-foreground font-light leading-relaxed text-sm">
                Projetos de infraestrutura de rede e telecomunicações. Cabeamento estruturado, fibra óptica, sistemas wireless e integração de sistemas.
              </p>
              </div>
            </div>
          </div>

          <div v-reveal class="group p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:border-enprodes-blue/50 relative overflow-hidden mb-24">
            <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
            <div class="relative z-10">
            <h2 class="text-3xl font-light mb-6">Diferenciais dos Nossos Projetos</h2>
            <div v-reveal-stagger="{ stagger: 0.08, delay: 0.1 }" class="grid md:grid-cols-3 gap-8">
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
          </div>

          <div class="text-center">
            <NuxtLink to="/solucoes" class="inline-flex items-center text-enprodes-blue hover:text-enprodes-blue-dark font-light">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar para Soluções
            </NuxtLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

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
