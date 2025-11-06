<template>
  <div ref="emblaRef" class="overflow-hidden">
    <div :class="cn('flex', $attrs.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '@/lib/utils'

const emblaRef = inject('emblaRef')
</script>
