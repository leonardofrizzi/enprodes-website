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

          <!-- Form Section -->
          <div class="grid md:grid-cols-2 gap-12 mb-24">
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
              <div class="relative h-full min-h-[500px] rounded-2xl bg-muted/20 border flex items-center justify-center">
                <p class="text-muted-foreground font-light">Imagem: Escritório ou equipe</p>
              </div>
            </div>
          </div>

          <!-- Offices Section -->
          <div>
            <h2 class="text-4xl font-light mb-12 text-center">Nossos Escritórios</h2>

            <!-- Office Cards -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div
                v-for="office in offices"
                :key="office.city"
                class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all cursor-pointer text-center"
                @click="selectedOffice = office"
                :class="{ 'ring-2 ring-enprodes-orange': selectedOffice?.city === office.city }"
              >
                <div class="h-12 w-12 rounded-full bg-enprodes-orange/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin class="h-6 w-6 text-enprodes-orange" />
                </div>
                <h3 class="font-light text-lg mb-1">{{ office.city }}</h3>
                <p class="text-sm text-muted-foreground font-light">{{ office.country }}</p>
              </div>
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
import { ref } from 'vue'
import { MapPin } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const offices = [
  {
    city: 'Rio de Janeiro',
    country: 'Brasil',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.4358537857!2d-43.49708229453124!3d-22.906846999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20State%20of%20Rio%20de%20Janeiro%2C%20Brazil!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  },
  {
    city: 'São José dos Campos',
    country: 'Brasil',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58960.97845488282!2d-45.91922024453124!3d-23.179369999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a8cb1c5b3c5%3A0x7f2d3c5e9c5e8c5d!2sS%C3%A3o%20Jos%C3%A9%20dos%20Campos%2C%20State%20of%20S%C3%A3o%20Paulo%2C%20Brazil!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  },
  {
    city: 'Rotterdam',
    country: 'Holanda',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78465.32076262847!2d4.394672999999999!3d51.924419800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5229bbac955e5e5!2sRotterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  },
  {
    city: 'Bogotá',
    country: 'Colômbia',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.39277699846!2d-74.14705059453124!3d4.710988600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus'
  }
]

// Define São José dos Campos como padrão
const selectedOffice = ref(offices[1])

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
