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
            <div class="relative h-96 rounded-2xl bg-muted/20 border flex items-center justify-center mb-12">
              <p class="text-muted-foreground font-light">Imagem: Engenharia de Proprietário Overview</p>
            </div>
          </div>

          <div class="max-w-4xl mx-auto mb-24">
            <h2 class="text-3xl font-light mb-6">O Que é Engenharia de Proprietário?</h2>
            <p class="text-muted-foreground font-light leading-relaxed mb-4">
              A Engenharia de Proprietário é uma consultoria técnica que atua como representante do proprietário ou investidor, garantindo que seus interesses sejam protegidos durante todas as fases do projeto.
            </p>
            <p class="text-muted-foreground font-light leading-relaxed">
              Nossa equipe multidisciplinar trabalha de forma independente, fornecendo análise técnica crítica, validação de soluções de engenharia, fiscalização e gestão de projetos complexos de infraestrutura.
            </p>
          </div>

          <div class="p-8 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] mb-24">
            <h2 class="text-3xl font-light mb-8 text-center">Nossos Serviços</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="relative z-10">
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Análise Técnica de Projetos</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Revisão crítica de projetos executivos, validação de soluções técnicas e verificação de conformidade com normas e especificações contratuais.
                </p>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="relative z-10">
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M2 12h20"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Gestão de Projetos</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Coordenação técnica de projetos multidisciplinares, gestão de prazos, custos e qualidade, compatibilização de disciplinas e controle de interfaces.
                </p>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="relative z-10">
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Fiscalização de Obras</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Acompanhamento técnico da execução, verificação de conformidade com projetos, controle de qualidade de materiais e serviços, e elaboração de relatórios periódicos.
                </p>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="relative z-10">
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Análise de Propostas</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Avaliação técnica de propostas de contratados, análise de metodologias construtivas, comparação de alternativas e apoio à tomada de decisão.
                </p>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="relative z-10">
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Comissionamento</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Acompanhamento de testes e comissionamento de sistemas, validação funcional de instalações, verificação de performance e aceitação final.
                </p>
                </div>
              </div>

              <div class="group p-6 rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
                <div class="relative z-10">
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Suporte Técnico</h3>
                <p class="text-muted-foreground font-light text-sm">
                  Assessoria técnica contínua, análise de pleitos e aditivos, apoio na resolução de interferências e consultoria para tomada de decisões técnicas.
                </p>
                </div>
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
                <Button class=" px-8 h-12 font-light">
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
