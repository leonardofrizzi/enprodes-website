<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-24">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-4xl font-light mb-4">Trabalhe Conosco</h1>
            <p class="text-lg text-muted-foreground font-light">
              Faça parte de uma equipe que está transformando a infraestrutura do Brasil e do mundo.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-4xl font-light mb-6">Envie seu currículo</h2>
              <form class="space-y-6" @submit.prevent="handleSubmit">
                <div>
                  <label class="block text-sm font-light mb-2">Nome completo</label>
                  <Input
                    v-model="formData.name"
                    placeholder="Seu nome completo"
                    class="font-light"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Email</label>
                  <Input
                    v-model="formData.email"
                    type="email"
                    placeholder="seu@email.com"
                    class="font-light"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Telefone</label>
                  <Input
                    v-model="formData.phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    class="font-light"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Área de interesse</label>
                  <select
                    v-model="formData.area"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background font-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Selecione uma área</option>
                    <option value="engenharia">Engenharia</option>
                    <option value="projetos">Projetos</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="administrativo">Administrativo</option>
                    <option value="comercial">Comercial</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Mensagem</label>
                  <Textarea
                    v-model="formData.message"
                    placeholder="Conte-nos um pouco sobre sua experiência..."
                    class="min-h-[150px] font-light"
                  />
                </div>

                <div>
                  <label class="block text-sm font-light mb-2">Currículo (PDF, DOC, DOCX)</label>
                  <div class="relative">
                    <input
                      ref="fileInput"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      class="hidden"
                      @change="handleFileChange"
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      class="w-full font-light justify-start"
                      @click="$refs.fileInput.click()"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      {{ fileName || 'Selecionar arquivo' }}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white px-8 font-light w-full"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Enviando...' : 'Enviar candidatura' }}
                </Button>
              </form>
            </div>

            <div>
              <h2 class="text-4xl font-light mb-6">Por que a Enprodes?</h2>
              <div class="grid gap-6">
                <div class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div class="h-10 w-10 rounded-full bg-enprodes-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-light text-lg mb-2">Projetos Desafiadores</h3>
                      <p class="text-sm text-muted-foreground font-light">
                        Trabalhe em projetos de infraestrutura complexos e inovadores
                      </p>
                    </div>
                  </div>
                </div>

                <div class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div class="h-10 w-10 rounded-full bg-enprodes-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-light text-lg mb-2">Equipe Multidisciplinar</h3>
                      <p class="text-sm text-muted-foreground font-light">
                        Colabore com profissionais experientes de diversas áreas
                      </p>
                    </div>
                  </div>
                </div>

                <div class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div class="h-10 w-10 rounded-full bg-enprodes-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-light text-lg mb-2">Atuação Global</h3>
                      <p class="text-sm text-muted-foreground font-light">
                        Escritórios no Brasil, Holanda e Colômbia
                      </p>
                    </div>
                  </div>
                </div>

                <div class="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
                  <div class="flex items-start gap-4">
                    <div class="h-10 w-10 rounded-full bg-enprodes-orange/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-enprodes-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-light text-lg mb-2">Crescimento Profissional</h3>
                      <p class="text-sm text-muted-foreground font-light">
                        Oportunidades de desenvolvimento e capacitação contínua
                      </p>
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
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  area: '',
  message: ''
})

const fileName = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const isSubmitting = ref(false)

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      alert('O arquivo deve ter no máximo 5MB')
      target.value = ''
      fileName.value = ''
      return
    }
    fileName.value = file.name
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true

  setTimeout(() => {
    alert('Currículo enviado com sucesso! Entraremos em contato em breve.')

    formData.value = {
      name: '',
      email: '',
      phone: '',
      area: '',
      message: ''
    }
    fileName.value = ''
    if (fileInput.value) {
      fileInput.value.value = ''
    }

    isSubmitting.value = false
  }, 1500)
}
useHead({
  title: 'Trabalhe Conosco - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Faça parte da equipe Enprodes. Envie seu currículo e trabalhe em projetos de engenharia desafiadores no Brasil e no mundo.'
    }
  ]
})
</script>
