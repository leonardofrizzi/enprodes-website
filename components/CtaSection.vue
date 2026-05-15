<template>
  <section class="py-24 bg-enprodes-gray">
    <div class="container mx-auto px-6 text-center">
      <div class="max-w-3xl mx-auto space-y-6">
        <h2 class="text-4xl font-light text-white">
          {{ title }}
        </h2>
        <p class="text-xl text-white/80 font-light">
          {{ description }}
        </p>
        <div class="pt-4">
          <NuxtLink :to="buttonHref">
            <Button class="px-8 h-12 font-light">
              {{ buttonLabel }}
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

withDefaults(
  defineProps<{
    title?: string
    description?: string
    buttonLabel?: string
    buttonHref?: string
  }>(),
  {
    title: 'Vamos conversar sobre seu projeto?',
    description: 'Entre em contato com nossa equipe de especialistas.',
    buttonLabel: 'Entrar em contato',
    buttonHref: '/contato'
  }
)
</script>
