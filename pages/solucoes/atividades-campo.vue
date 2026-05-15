<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Atividades de Campo</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Serviços especializados de acompanhamento técnico, comissionamento e inspeção em campo para garantir a qualidade e conformidade de projetos e sistemas.
            </p>
          </div>

          <div class="mb-24">
            <div class="relative h-96 rounded-2xl bg-muted/20 border flex items-center justify-center mb-12">
              <p class="text-muted-foreground font-light">Imagem: Atividades de Campo Overview</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div class="group p-6 rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300"></div>
              <div class="relative z-10">
                <div class="relative h-48 rounded-xl bg-muted/20 border flex items-center justify-center mb-4">
                  <p class="text-sm text-muted-foreground font-light">Imagem aqui</p>
                </div>
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Acompanhamento Técnico de Obra</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Acompanhamento especializado durante execução de obras, com soluções de engenharia, identificação de interferências e compatibilização de projetos.
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
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Comissionamento</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Comissionamento completo de equipamentos e sistemas, com ensaios, testes funcionais e elaboração de laudos técnicos.
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
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Inspeção Especial</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Inspeções especializadas nas áreas mecânica, civil, elétrica, eletrônica e automação, com elaboração de relatórios técnicos detalhados.
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
                <h2 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">Laudos Técnicos</h2>
                <p class="text-muted-foreground font-light leading-relaxed text-sm">
                  Elaboração de laudos técnicos especializados para sistemas e equipamentos, com documentação completa de testes e validações.
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
  title: 'Atividades de Campo - Soluções - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Serviços especializados de campo: acompanhamento técnico de obra, comissionamento e inspeção especial em diversas disciplinas.'
    }
  ]
})
</script>
