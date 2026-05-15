<template>
  <div
    :class="cn(
      'group rounded-xl border-2 border-gray-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:scale-105 hover:-translate-y-2 hover:border-enprodes-blue/50 relative overflow-hidden',
      size === 'lg' ? 'p-8' : 'p-6'
    )"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-enprodes-blue/5 rounded-full blur-2xl group-hover:bg-enprodes-blue/10 transition-all duration-300 pointer-events-none"></div>

    <div
      :class="cn(
        'relative z-10',
        layout === 'horizontal' ? 'flex items-start gap-4' : ''
      )"
    >
      <div
        v-if="$slots.icon || icon"
        :class="cn(
          'rounded-lg bg-gradient-to-br from-enprodes-blue to-enprodes-blue/80 shadow-md flex items-center justify-center flex-shrink-0 text-white group-hover:shadow-lg group-hover:shadow-enprodes-blue/30 group-hover:scale-110 transition-all duration-300',
          size === 'lg' ? 'h-14 w-14 mb-6' : 'h-12 w-12',
          layout === 'horizontal' ? '' : 'mb-4'
        )"
      >
        <slot name="icon">
          <component v-if="icon" :is="icon" :class="size === 'lg' ? 'h-7 w-7' : 'h-6 w-6'" />
        </slot>
      </div>

      <div :class="layout === 'horizontal' ? 'flex-1' : ''">
        <h3
          :class="cn(
            'font-light mb-2 group-hover:text-enprodes-blue transition-colors duration-300',
            size === 'lg' ? 'text-2xl mb-4' : 'text-lg'
          )"
        >
          {{ title }}
        </h3>
        <p :class="cn('text-muted-foreground font-light', size === 'lg' ? 'leading-relaxed' : 'text-sm')">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { cn } from '@/lib/utils'

withDefaults(
  defineProps<{
    title: string
    description: string
    icon?: Component
    layout?: 'vertical' | 'horizontal'
    size?: 'md' | 'lg'
  }>(),
  {
    layout: 'horizontal',
    size: 'md'
  }
)
</script>
