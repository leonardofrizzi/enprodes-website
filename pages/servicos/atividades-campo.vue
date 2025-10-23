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

          <h2 class="text-4xl font-light mb-12 text-center">Nossas Soluções</h2>
          <div class="grid md:grid-cols-3 gap-12 mb-24 items-start">
            <div class="p-6 rounded-2xl border bg-card h-full text-center">
              <h3 class="text-2xl font-light mb-6">ATO</h3>
              <p class="text-sm text-muted-foreground font-light mb-4">Acompanhamento Técnico de Obra</p>
              <ul class="space-y-3 text-left inline-block">
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Soluções de engenharia</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Identificação de interferências</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Compatibilização de projetos</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Fiscalização</span>
                </li>
              </ul>
            </div>

            <div class="p-6 rounded-2xl border bg-card h-full text-center">
              <h3 class="text-2xl font-light mb-6">Comissionamento</h3>
              <p class="text-sm text-muted-foreground font-light mb-4 opacity-0">placeholder</p>
              <ul class="space-y-3 text-left inline-block">
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Ensaio e testes de equipamentos e sistemas</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Elaboração de laudos técnicos</span>
                </li>
              </ul>
            </div>

            <div class="p-6 rounded-2xl border bg-card h-full text-center">
              <h3 class="text-2xl font-light mb-6">Inspeção Especial</h3>
              <p class="text-sm text-muted-foreground font-light mb-4 opacity-0">placeholder</p>
              <ul class="space-y-3 text-left inline-block">
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Mecânica</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Civil</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Elétrica</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Eletrônica</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Automação</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Emissão de relatório técnico</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 class="text-4xl font-light mb-12 text-center">Serviços Especializados</h2>
          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Acompanhamento Técnico de Obra</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Acompanhamento técnico especializado durante a execução de obras. Soluções de engenharia, identificação de interferências, compatibilização de projetos e fiscalização em campo.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Comissionamento de Sistemas</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Comissionamento completo de equipamentos e sistemas. Ensaios, testes funcionais e elaboração de laudos técnicos para garantir o correto funcionamento das instalações.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Inspeção Especial</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Inspeções especializadas nas áreas de mecânica, civil, elétrica, eletrônica e automação. Elaboração de relatórios técnicos detalhados sobre conformidade e qualidade das instalações.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Laudos Técnicos</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Elaboração de laudos técnicos especializados para sistemas e equipamentos. Documentação completa de testes, ensaios e validações realizadas em campo.
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
  title: 'Atividades de Campo - Serviços - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Serviços especializados de campo: acompanhamento técnico de obra, comissionamento e inspeção especial em diversas disciplinas.'
    }
  ]
})
</script>
