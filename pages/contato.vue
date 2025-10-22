<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Contato</h1>
            <p class="text-lg text-muted-foreground font-light">
              Entre em contato conosco. Estamos prontos para ajudar no seu próximo projeto.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-4xl font-light mb-6">Envie uma mensagem</h2>
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-light mb-2">Nome</label>
                  <Input placeholder="Seu nome" class="font-light" />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" class="font-light" />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Telefone</label>
                  <Input type="tel" placeholder="(00) 00000-0000" class="font-light" />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Mensagem</label>
                  <Textarea placeholder="Como podemos ajudar?" class="min-h-[150px] font-light" />
                </div>

                <Button class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 font-light w-full">
                  Enviar mensagem
                </Button>
              </form>
            </div>

            <div>
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-4xl font-light">Nossos Escritórios</h2>
                <button
                  v-if="selectedCountry !== 'world'"
                  @click="resetToWorldMap"
                  class="text-sm text-enprodes-orange hover:text-enprodes-orange-dark font-light flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Voltar ao mapa mundial
                </button>
              </div>

              <div class="relative h-96 rounded-2xl border bg-muted/10 mb-8 p-4 overflow-hidden">
                <transition name="fade" mode="out-in">
                  <div v-if="selectedCountry === 'world'" key="world" class="relative w-full h-full">
                    <SvgMap
                      :map="World"
                      @mouseover="handleLocationMouseOver"
                      @mouseout="handleLocationMouseOut"
                      @click="handleLocationClick"
                      class="w-full h-full"
                    />
                  </div>
                  <div v-else-if="selectedCountry === 'br'" key="brazil" class="relative w-full h-full">
                    <SvgMap
                      :map="Brazil"
                      @mouseover="handleLocationMouseOver"
                      @mouseout="handleLocationMouseOut"
                      @click="handleBrazilLocationClick"
                      class="w-full h-full"
                    />
                    <div
                      v-for="office in brazilianOffices"
                      :key="office.city"
                      class="absolute pointer-events-none"
                      :style="{
                        left: office.x + '%',
                        top: office.y + '%',
                        transform: 'translate(-50%, -100%)'
                      }"
                    >
                      <div class="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8 drop-shadow-lg transition-all duration-300"
                          :class="hoveredOffice === office.city ? 'h-10 w-10' : 'h-8 w-8'"
                          viewBox="0 0 24 24"
                          fill="#f67031"
                          stroke="#ffffff"
                          stroke-width="1"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3" fill="#ffffff"/>
                        </svg>
                        <div
                          v-if="hoveredOffice === office.city"
                          class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-lg border-2 border-enprodes-orange"
                        >
                          <p class="text-sm font-light text-gray-900">{{ office.city }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else key="country" class="relative w-full h-full">
                    <SvgMap
                      :map="World"
                      @mouseover="handleLocationMouseOver"
                      @mouseout="handleLocationMouseOut"
                      class="w-full h-full"
                    />
                  </div>
                </transition>
              </div>

              <div class="grid gap-4">
                <div
                  v-for="office in offices"
                  :key="office.city"
                  class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all cursor-pointer"
                  @click="handleOfficeClick(office)"
                  @mouseenter="hoveredOffice = office.city"
                  @mouseleave="hoveredOffice = null"
                  :class="{ 'ring-2 ring-enprodes-orange': hoveredOffice === office.city }"
                >
                  <div class="flex items-start gap-4">
                    <div class="h-10 w-10 rounded-full bg-enprodes-orange/10 flex items-center justify-center flex-shrink-0">
                      <MapPin class="h-5 w-5 text-enprodes-orange" />
                    </div>
                    <div class="space-y-1">
                      <h3 class="font-light text-lg">{{ office.city }}</h3>
                      <p class="text-sm text-muted-foreground font-light">{{ office.country }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MapPin } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SvgMap } from 'vue-svg-map'
import World from '@svg-maps/world'
import Brazil from '@svg-maps/brazil'
import 'vue-svg-map/style.css'

const hoveredOffice = ref<string | null>(null)
const hoveredLocation = ref<any>(null)
const selectedCountry = ref<string>('world')

const offices = [
  { city: 'Rio de Janeiro', country: 'Brasil', countryCode: 'br', stateCode: 'rj', x: 72, y: 68 },
  { city: 'São José dos Campos', country: 'Brasil', countryCode: 'br', stateCode: 'sp', x: 65, y: 70 },
  { city: 'Rotterdam', country: 'Holanda', countryCode: 'nl', stateCode: null, x: 0, y: 0 },
  { city: 'Bogotá', country: 'Colômbia', countryCode: 'co', stateCode: null, x: 0, y: 0 }
]

const brazilianOffices = computed(() =>
  offices.filter(office => office.countryCode === 'br')
)

const handleLocationMouseOver = (event: any) => {
  hoveredLocation.value = event.target
}

const handleLocationMouseOut = () => {
  hoveredLocation.value = null
}

const handleLocationClick = (event: any) => {
  const locationId = event.target.getAttribute('id')
  if (locationId === 'br') {
    selectedCountry.value = 'br'
  } else if (locationId === 'nl') {
    selectedCountry.value = 'nl'
    hoveredOffice.value = 'Rotterdam'
  } else if (locationId === 'co') {
    selectedCountry.value = 'co'
    hoveredOffice.value = 'Bogotá'
  }
}

const handleBrazilLocationClick = (event: any) => {
  const locationId = event.target.getAttribute('id')?.toLowerCase()
  if (locationId === 'rj') {
    hoveredOffice.value = 'Rio de Janeiro'
  } else if (locationId === 'sp') {
    hoveredOffice.value = 'São José dos Campos'
  }
}

const handleOfficeClick = (office: typeof offices[0]) => {
  hoveredOffice.value = office.city
  if (office.countryCode === 'br') {
    selectedCountry.value = 'br'
  } else {
    selectedCountry.value = office.countryCode
  }
}

const resetToWorldMap = () => {
  selectedCountry.value = 'world'
  hoveredOffice.value = null
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:deep(.svg-map) {
  width: 100%;
  height: 100%;
}

:deep(.svg-map__location) {
  fill: #e5e7eb;
  stroke: #ffffff;
  stroke-width: 0.5;
  transition: all 0.3s;
  cursor: pointer;
}

:deep(.svg-map__location:hover) {
  fill: #f67031;
  stroke: #d95a1f;
  stroke-width: 1;
}

/* World map - highlight office countries */
:deep(.svg-map__location#br),
:deep(.svg-map__location#nl),
:deep(.svg-map__location#co) {
  fill: #666666;
}

:deep(.svg-map__location#br:hover),
:deep(.svg-map__location#nl:hover),
:deep(.svg-map__location#co:hover) {
  fill: #f67031;
}

/* Brazil map - highlight office states in orange */
:deep(.svg-map__location#RJ),
:deep(.svg-map__location#SP) {
  fill: #f67031 !important;
  stroke: #d95a1f;
  stroke-width: 1;
}

:deep(.svg-map__location#RJ:hover),
:deep(.svg-map__location#SP:hover) {
  fill: #e65a1f !important;
  stroke: #c54a0f;
  stroke-width: 1.5;
}
</style>
