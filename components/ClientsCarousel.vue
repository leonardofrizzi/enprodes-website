<template>
  <div class="relative">
    <div class="max-w-6xl mx-auto">
      <Swiper
        :modules="[SwiperNavigation, SwiperAutoplay]"
        :slides-per-view="1"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="{
          nextEl: '.clients-next',
          prevEl: '.clients-prev',
        }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 }
        }"
        class="!px-0"
      >
        <SwiperSlide v-for="client in clients" :key="client.name">
          <ClientCard :client="client" :to="linkTo" />
        </SwiperSlide>
      </Swiper>
    </div>

    <button
      class="clients-prev hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center transition-all shadow-md hover:shadow-lg"
      aria-label="Anterior"
    >
      <ChevronLeft class="w-5 h-5" />
    </button>
    <button
      class="clients-next hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-enprodes-blue/50 disabled:opacity-50 disabled:cursor-not-allowed items-center justify-center transition-all shadow-md hover:shadow-lg"
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

withDefaults(
  defineProps<{
    linkTo?: string
  }>(),
  {
    linkTo: '/sobre#clientes'
  }
)

const { list } = useClients()
const clients = list()
</script>
