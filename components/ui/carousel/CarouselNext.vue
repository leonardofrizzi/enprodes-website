<template>
  <button
    type="button"
    :class="cn(
      'absolute top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md hover:shadow-lg',
      ($attrs.class as string)
    )"
    :disabled="!carouselState || !carouselState.canScrollNext"
    @click.stop="scrollNext"
  >
    <ChevronRight class="w-5 h-5" />
    <span class="sr-only">Next slide</span>
  </button>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { EmblaCarouselType } from 'embla-carousel'

const emblaApi = inject<Ref<EmblaCarouselType | undefined>>('emblaApi')
const carouselState = inject<Ref<{ canScrollPrev: boolean; canScrollNext: boolean }>>('carouselState')

function scrollNext() {
  if (emblaApi?.value) {
    emblaApi.value.scrollNext()
  }
}
</script>
