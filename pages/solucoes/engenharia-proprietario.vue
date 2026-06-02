<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Engenharia de Proprietário</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Consultoria técnica especializada representando os interesses do proprietário em projetos de engenharia de infraestrutura.
            </p>
          </div>

          <div class="mb-24">
            <div class="relative h-[500px] rounded-2xl border overflow-hidden mb-12">
              <img
                src="/engprop.webp"
                alt="Engenharia de Proprietário - Enprodes"
                class="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 mb-4 overflow-hidden bg-muted/20 rounded-xl">
                  <img
                    src="/engprop/atp.svg"
                    alt="Análise Técnica de Projetos"
                    class="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Análise Técnica de Projetos</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Revisão crítica de projetos executivos, validação de soluções técnicas e verificação de conformidade com normas e especificações contratuais.
                </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 mb-4 overflow-hidden bg-muted/20 rounded-xl">
                  <img
                    src="/engprop/gsp.svg"
                    alt="Gestão de Projetos"
                    class="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Gestão de Projetos</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Coordenação técnica de projetos multidisciplinares, gestão de prazos, custos e qualidade, compatibilização de disciplinas e controle de interfaces.
                </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 mb-4 overflow-hidden bg-muted/20 rounded-xl">
                  <img
                    src="/atividades-campo/at.svg"
                    alt="Fiscalização de Obras"
                    class="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Fiscalização de Obras</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Acompanhamento técnico da execução, verificação de conformidade com projetos, controle de qualidade de materiais e serviços, e elaboração de relatórios periódicos.
                </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 mb-4 overflow-hidden bg-muted/20 rounded-xl">
                  <img
                    src="/engprop/ana.svg"
                    alt="Análise de Propostas"
                    class="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Análise de Propostas</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Avaliação técnica de propostas de contratados, análise de metodologias construtivas, comparação de alternativas e apoio à tomada de decisão.
                </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 mb-4 overflow-hidden bg-muted/20 rounded-xl">
                  <img
                    src="/atividades-campo/com.svg"
                    alt="Comissionamento"
                    class="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Comissionamento</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Acompanhamento de testes e comissionamento de sistemas, validação funcional de instalações, verificação de performance e aceitação final.
                </p>
              </div>
            </div>

            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 mb-4 overflow-hidden bg-muted/20 rounded-xl">
                  <img
                    src="/atividades-campo/suporte.svg"
                    alt="Suporte Técnico"
                    class="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-contain"
                    loading="lazy"
                  />
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Suporte Técnico</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Assessoria técnica contínua, análise de pleitos e aditivos, apoio na resolução de interferências e consultoria para tomada de decisões técnicas.
                </p>
              </div>
            </div>
          </div>

          <div class="p-8 rounded-2xl border bg-card mb-24">
            <h2 class="text-3xl font-light mb-6">Diferenciais</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Independência Técnica</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Atuação totalmente independente, focada exclusivamente nos interesses do proprietário.
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
                <h3 class="text-xl font-light mb-2">Equipe Experiente</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Profissionais seniores com vasta experiência em projetos de infraestrutura crítica.
                </p>
              </div>

              <div>
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-2">Visão Multidisciplinar</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Expertise em todas as disciplinas de engenharia para análise completa dos projetos.
                </p>
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
  title: 'Engenharia de Proprietário - Soluções - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Consultoria técnica especializada representando os interesses do proprietário. Análise de projetos, gestão, fiscalização e comissionamento.'
    }
  ]
})
</script>
