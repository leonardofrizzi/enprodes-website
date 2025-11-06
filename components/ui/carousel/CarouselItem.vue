<template>
  <div :class="cn('min-w-0 shrink-0 grow-0 basis-full', $attrs.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>
