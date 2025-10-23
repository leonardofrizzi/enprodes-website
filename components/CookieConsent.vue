<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="translate-y-full opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-full opacity-0"
      >
        <div
          v-if="showConsent"
          class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div class="max-w-6xl mx-auto bg-card border rounded-2xl shadow-2xl p-6 md:p-8">
            <div class="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div class="flex-1">
                <h3 class="text-xl font-light mb-3">Cookies e Privacidade</h3>
                <p class="text-sm text-muted-foreground font-light leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo e analisar nosso tráfego.
                  Ao clicar em "Aceitar", você concorda com o uso de cookies.
                  <NuxtLink
                    to="/politica-privacidade"
                    class="text-enprodes-orange hover:underline ml-1"
                  >
                    Saiba mais em nossa Política de Privacidade.
                  </NuxtLink>
                </p>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  @click="rejectCookies"
                  class="font-light hover:bg-muted/80 hover:text-foreground"
                >
                  Rejeitar
                </Button>
                <Button
                  @click="acceptCookies"
                  class="bg-enprodes-orange hover:bg-enprodes-orange-dark text-white font-light"
                >
                  Aceitar Cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'

const showConsent = ref(false)
const COOKIE_CONSENT_KEY = 'enprodes-cookie-consent'

onMounted(() => {
  // Check if user has already made a choice
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!consent) {
    // Show modal after a short delay for better UX
    setTimeout(() => {
      showConsent.value = true
    }, 1000)
  }
})

const acceptCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
  showConsent.value = false
  // Here you can initialize analytics, tracking, etc.
  console.log('Cookies accepted')
}

const rejectCookies = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
  showConsent.value = false
  console.log('Cookies rejected')
}
</script>
