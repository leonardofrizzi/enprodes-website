<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="group aspect-square rounded-xl border-2 border-gray-200 bg-white hover:shadow-lg hover:border-enprodes-blue/50 transition-all duration-300 flex items-center justify-center p-6 relative overflow-hidden cursor-pointer"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <img
      v-if="client.logo"
      :src="client.logo"
      :alt="client.name"
      class="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
    />
    <div v-else class="text-center text-muted-foreground relative z-10">
      <Building2 class="h-12 w-12 mx-auto mb-2 opacity-30" />
      <p class="text-xs font-light opacity-50">{{ client.name }}</p>
    </div>
  </NuxtLink>

  <div
    v-else
    class="group aspect-square rounded-xl border-2 border-gray-200 bg-white hover:shadow-lg hover:border-enprodes-blue/50 transition-all duration-300 flex items-center justify-center p-6 relative overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-enprodes-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <img
      v-if="client.logo"
      :src="client.logo"
      :alt="client.name"
      class="relative z-10 w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
    />
    <div v-else class="text-center text-muted-foreground relative z-10">
      <Building2 class="h-12 w-12 mx-auto mb-2 opacity-30" />
      <p class="text-xs font-light opacity-50">{{ client.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Building2 } from 'lucide-vue-next'
import type { Client } from '@/composables/useClients'

defineProps<{
  client: Client
  to?: string
}>()
</script>
