<template>
  <div :class="cn('relative', ($attrs.class as string))">
    <slot :carousel-state="carouselState" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaCarouselType } from 'embla-carousel'
import { cn } from '@/lib/utils'

interface CarouselProps {
  opts?: any
  autoplay?: boolean
  autoplayDelay?: number
}

const props = withDefaults(defineProps<CarouselProps>(), {
  autoplay: false,
  autoplayDelay: 3000
})

const [emblaRef, emblaApi] = emblaCarouselVue(props.opts || {})

const carouselState = ref({
  canScrollPrev: false,
  canScrollNext: false,
})

let autoplayInterval: ReturnType<typeof setInterval> | null = null

function updateCarouselState() {
  if (!emblaApi.value) return

  carouselState.value = {
    canScrollPrev: emblaApi.value.canScrollPrev(),
    canScrollNext: emblaApi.value.canScrollNext(),
  }
}

function startAutoplay() {
  if (!props.autoplay || !emblaApi.value) return

  autoplayInterval = setInterval(() => {
    if (!emblaApi.value) return
    emblaApi.value.scrollNext()
  }, props.autoplayDelay)
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

function scrollPrev() {
  if (emblaApi.value) {
    emblaApi.value.scrollPrev()
  }
}

function scrollNext() {
  if (emblaApi.value) {
    emblaApi.value.scrollNext()
  }
}

onMounted(() => {
  if (!emblaApi.value) return

  updateCarouselState()
  emblaApi.value.on('select', updateCarouselState)
  emblaApi.value.on('reInit', updateCarouselState)

  if (props.autoplay) {
    startAutoplay()
  }
})

onUnmounted(() => {
  stopAutoplay()
})

provide('emblaRef', emblaRef)
provide('emblaApi', emblaApi)
provide('carouselState', carouselState)

defineExpose({
  scrollPrev,
  scrollNext,
  emblaApi,
  carouselState
})
</script>
