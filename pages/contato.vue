<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Contato</h1>
            <p class="text-lg text-muted-foreground font-light">
              Entre em contato conosco. Estamos prontos para ajudar no seu próximo projeto.
            </p>
          </div>

          <!-- Form Section -->
          <div class="grid md:grid-cols-2 gap-12 mb-24">
            <div v-reveal>
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

                <Button class=" px-8 font-light w-full">
                  Enviar mensagem
                </Button>
              </form>
            </div>

            <div>
              <div class="relative h-full min-h-[500px] rounded-2xl bg-muted/20 border flex items-center justify-center">
                <p class="text-muted-foreground font-light">Imagem: Escritório ou equipe</p>
              </div>
            </div>
          </div>

          <!-- Offices Section -->
          <div id="escritorios">
            <h2 v-reveal class="text-4xl font-light mb-12 text-center">Nossos Escritórios</h2>

            <!-- Office Cards -->
            <div v-reveal-stagger="{ stagger: 0.08 }" class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div
                v-for="office in offices"
                :key="office.city"
                :id="office.id"
                class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all cursor-pointer text-center"
                @click="selectedOffice = office"
                :class="{ 'ring-2 ring-enprodes-blue': selectedOffice?.city === office.city }"
              >
                <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin class="h-6 w-6 text-enprodes-blue" />
                </div>
                <h3 class="font-light text-lg mb-1">{{ office.city }}</h3>
                <p class="text-sm text-muted-foreground font-light">{{ office.country }}</p>
              </div>
            </div>

            <!-- Address and Map -->
            <div class="mb-6 text-center">
              <p class="text-lg text-muted-foreground font-light">
                {{ selectedOffice.address }}
              </p>
            </div>

            <!-- Map -->
            <div class="relative h-[500px] rounded-2xl border bg-muted/10 overflow-hidden">
              <iframe
                :src="selectedOffice.mapUrl"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MapPin } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const offices = [
  {
    id: 'rio-de-janeiro',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    address: 'Avenida Presidente Vargas 3131 Centro Rio de Janeiro RJ 20210-030',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2947784615346!2d-43.19736892378051!3d-22.90682703966954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f9e3e3e3e3f%3A0x3e3e3e3e3e3e3e3e!2sAv.%20Presidente%20Vargas%2C%203131%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020210-030!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr'
  },
  {
    id: 'sao-jose-dos-campos',
    city: 'São José dos Campos',
    country: 'Brasil',
    address: 'Av. Shishima Hifumi, 2911 - Urbanova, São José dos Campos - SP, 12244-000, Parque tecnológico-UNIVAP',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4782946834895!2d-45.86398812377366!3d-23.179385579001664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a6b29c5b3c5%3A0x7f2d3c5e9c5e8c5d!2sAv.%20Shishima%20Hifumi%2C%202911%20-%20Urbanova%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012244-000!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr'
  },
  {
    id: 'rotterdam',
    city: 'Rotterdam',
    country: 'Holanda',
    address: 'Rotterdam, Holanda',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78465.32076262847!2d4.394672999999999!3d51.924419800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5229bbac955e5e5!2sRotterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  },
  {
    id: 'bogota',
    city: 'Bogotá',
    country: 'Colômbia',
    address: 'Bogotá, Colômbia',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39277699846!2d-74.14705059453124!3d4.710988600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  }
]

// Define São José dos Campos como padrão
const selectedOffice = ref(offices[1])

// Detecta o hash da URL e seleciona o escritório correspondente
onMounted(() => {
  const hash = window.location.hash.substring(1) // Remove o #
  if (hash) {
    const office = offices.find(o => o.id === hash)
    if (office) {
      selectedOffice.value = office
      // Scroll suave para a seção
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }
})

useHead({
  title: 'Contato - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato com a Enprodes. Escritórios no Brasil, Holanda e Colômbia.'
    }
  ]
})
</script>

<style scoped>
/* No custom styles needed */
</style>
