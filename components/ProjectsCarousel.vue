<template>
  <div class="relative">
    <div class="max-w-6xl mx-auto">
      <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="24"
        :loop="true"
        :autoplay="{ delay: 4500, disableOnInteraction: false }"
        :navigation="{
          nextEl: '.projects-next',
          prevEl: '.projects-prev',
        }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="!px-1 !pb-2"
      >
        <SwiperSlide v-for="project in projects" :key="project.slug" class="h-auto">
          <ProjectCard :project="project" />
        </SwiperSlide>
      </Swiper>
    </div>

    <button
      class="projects-prev hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-12 w-12 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center transition-all shadow-md hover:shadow-lg"
      aria-label="Anterior"
    >
      <ChevronLeft class="w-5 h-5" />
    </button>
    <button
      class="projects-next hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 h-12 w-12 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center transition-all shadow-md hover:shadow-lg"
      aria-label="Próximo"
    >
      <ChevronRight class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Autoplay as SwiperAutoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const { list } = useProjects()
const projects = list()
</script>

<style scoped>
:deep(.swiper-slide) {
  height: auto;
  display: flex;
}
</style>
