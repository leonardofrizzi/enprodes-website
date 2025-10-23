<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Manuais e Procedimentos de Operação e de Manutenção</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Elaboração de manuais técnicos e procedimentos operacionais para garantir a correta operação e manutenção de sistemas e equipamentos.
            </p>
          </div>

          <div class="mb-24">
            <div class="relative h-96 rounded-2xl bg-muted/20 border flex items-center justify-center mb-12">
              <p class="text-muted-foreground font-light">Imagem: Manuais e Procedimentos Overview</p>
            </div>
          </div>

          <h2 class="text-4xl font-light mb-12 text-center">Documentação Técnica</h2>
          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Manuais de Operação</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Elaboração de manuais de operação completos para sistemas e equipamentos. Documentação de procedimentos operacionais, interfaces de controle e rotinas de operação normal.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Manuais de Manutenção</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Desenvolvimento de manuais de manutenção preventiva e corretiva. Procedimentos de inspeção, calibração e substituição de componentes.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Procedimentos Operacionais</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Elaboração de procedimentos operacionais padronizados. Instruções detalhadas para operação de sistemas, resposta a alarmes e situações de emergência.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Procedimentos de Manutenção</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Desenvolvimento de procedimentos de manutenção preventiva e preditiva. Cronogramas de manutenção e instruções técnicas especializadas.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Diagramas e Fluxogramas</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Elaboração de diagramas técnicos e fluxogramas operacionais. Documentação visual de processos e sistemas para facilitar o entendimento das equipes.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">As-Built e Documentação Final</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Elaboração de documentação as-built e documentação final de sistemas. Registros precisos das instalações executadas e configurações finais.
              </p>
            </div>
          </div>

          <div class="text-center">
            <NuxtLink to="/servicos" class="inline-flex items-center text-enprodes-orange hover:text-enprodes-orange-dark font-light">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar para Serviços
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

useHead({
  title: 'Manuais e Procedimentos de Operação e de Manutenção - Serviços - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Elaboração de manuais técnicos e procedimentos operacionais: manuais de operação, manutenção, procedimentos padronizados e documentação as-built.'
    }
  ]
})
</script>
