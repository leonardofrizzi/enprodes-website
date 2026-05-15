<template>
  <div class="group rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden flex flex-col h-full">
    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

    <div class="relative h-48 bg-muted/20 border-b flex items-center justify-center overflow-hidden">
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div v-else class="text-center text-muted-foreground">
        <ImageIcon class="h-10 w-10 mx-auto mb-2 opacity-30" />
        <p class="text-xs font-light opacity-50">Imagem do projeto</p>
      </div>
    </div>

    <div class="relative z-10 p-6 flex flex-col flex-1">
      <span class="text-xs px-2 py-1 rounded-md bg-enprodes-blue/10 text-enprodes-blue self-start mb-3 font-light">
        {{ project.category }}
      </span>

      <h3 class="text-xl font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300">
        {{ project.title }}
      </h3>

      <p class="text-muted-foreground font-light text-sm leading-relaxed">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Image as ImageIcon } from 'lucide-vue-next'
import type { Project } from '@/composables/useProjects'

defineProps<{
  project: Project
}>()
</script>
