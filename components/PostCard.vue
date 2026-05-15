<template>
  <NuxtLink
    :to="`/atualizacoes/${post.slug}`"
    class="group rounded-2xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden flex flex-col cursor-pointer"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

    <div
      :class="cn(
        'relative bg-muted/20 border-b flex items-center justify-center overflow-hidden',
        variant === 'compact' ? 'h-40' : 'h-48'
      )"
    >
      <img
        v-if="post.cover"
        :src="post.cover"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <p v-else class="text-sm text-muted-foreground font-light">Imagem da capa</p>
    </div>

    <div class="relative z-10 p-6 flex flex-col flex-1">
      <div class="flex items-center gap-3 mb-3 text-xs text-muted-foreground font-light">
        <span class="px-2 py-1 rounded-md bg-enprodes-blue/10 text-enprodes-blue">
          {{ post.category }}
        </span>
        <span>{{ post.date }}</span>
      </div>

      <h2
        :class="cn(
          'font-light mb-3 group-hover:text-enprodes-blue transition-colors duration-300',
          variant === 'compact' ? 'text-lg' : 'text-xl'
        )"
      >
        {{ post.title }}
      </h2>

      <p
        v-if="variant !== 'compact'"
        class="text-muted-foreground font-light text-sm leading-relaxed mb-6 flex-1"
      >
        {{ post.excerpt }}
      </p>

      <span
        v-if="variant !== 'compact'"
        class="inline-flex items-center text-enprodes-blue group-hover:text-enprodes-blue-dark font-light text-sm mt-auto"
      >
        Ler mais
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

export interface Post {
  slug: string
  title: string
  excerpt?: string
  category: string
  date: string
  cover?: string
}

withDefaults(
  defineProps<{
    post: Post
    variant?: 'default' | 'compact'
  }>(),
  {
    variant: 'default'
  }
)
</script>
