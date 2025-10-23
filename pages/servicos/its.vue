<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Sistemas de Transporte Inteligente (ITS)</h1>
            <p class="text-lg text-muted-foreground font-light max-w-3xl mx-auto">
              Soluções inteligentes para gestão e monitoramento de tráfego, segurança viária e comunicação com usuários.
            </p>
          </div>

          <div class="mb-24">
            <div class="relative h-96 rounded-2xl bg-muted/20 border flex items-center justify-center mb-12">
              <p class="text-muted-foreground font-light">Imagem: ITS Overview</p>
            </div>
          </div>

          <h2 class="text-4xl font-light mb-12 text-center">Nossas Soluções em ITS</h2>
          <div class="grid md:grid-cols-3 gap-12 mb-24 items-start">
            <div class="p-6 rounded-2xl border bg-card h-full text-center">
              <h3 class="text-2xl font-light mb-6">Comunicação com o Usuário</h3>
              <ul class="space-y-3 text-left inline-block">
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Painel de Mensagem Variável</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Telefones de emergência</span>
                </li>
              </ul>
            </div>

            <div class="p-6 rounded-2xl border bg-card h-full text-center">
              <h3 class="text-2xl font-light mb-6">Monitoramento</h3>
              <ul class="space-y-3 text-left inline-block">
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Câmeras PTZ</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Câmeras Fixas</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Vídeo detecção</span>
                </li>
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Analíticos e obtenção de dados</span>
                </li>
              </ul>
            </div>

            <div class="p-6 rounded-2xl border bg-card h-full text-center">
              <h3 class="text-2xl font-light mb-6">Controle</h3>
              <ul class="space-y-3 text-left inline-block">
                <li class="flex items-start">
                  <span class="text-enprodes-orange mr-2">•</span>
                  <span class="text-muted-foreground font-light">Detecção de excesso de altura</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 class="text-4xl font-light mb-12 text-center">Sistemas e Aplicações</h2>
          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Painéis de Mensagem Variável</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projeto e especificação de painéis de mensagem variável para comunicação em tempo real com os usuários das vias. Informações sobre tráfego, condições climáticas e alertas de segurança.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Sistema de CFTV</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Sistemas de videomonitoramento com câmeras PTZ e fixas para vigilância e gestão de tráfego. Integração com centrais de controle para monitoramento em tempo real.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Vídeo Detecção e Analíticos</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Sistemas de detecção automática de incidentes através de análise de vídeo. Contagem de veículos, análise de fluxo e identificação de situações de risco.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Detecção de Excesso de Altura</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Sistemas de detecção e alerta de veículos com excesso de altura. Proteção de estruturas como pontes, viadutos e túneis através de sensoriamento e sinalização automática.
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Telefones de Emergência</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projeto de sistemas de comunicação de emergência para rodovias e túneis. Telefones SOS conectados a centrais de atendimento para auxílio imediato aos usuários.
              </p>
            </div>

            <div class="p-6 rounded-2xl border bg-card">
              <div class="relative h-64 rounded-xl bg-muted/20 border flex items-center justify-center mb-6">
                <p class="text-muted-foreground font-light">Imagem aqui</p>
              </div>
              <h2 class="text-2xl font-light mb-4">Central de Controle Operacional</h2>
              <p class="text-muted-foreground font-light leading-relaxed">
                Projeto de centrais de controle integradas para gestão de sistemas ITS. Supervisão de todos os equipamentos e coordenação de ações operacionais.
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
  title: 'Sistemas de Transporte Inteligente (ITS) - Serviços - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Soluções ITS: painéis de mensagem variável, CFTV, vídeo detecção, detecção de altura e sistemas de comunicação de emergência.'
    }
  ]
})
</script>
