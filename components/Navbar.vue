<template>
  <header
    :class="cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      scrolled
        ? 'bg-secondary/95 backdrop-blur-lg shadow-2xl mx-6 mt-6 rounded-2xl border border-white/10'
        : 'bg-white/95 backdrop-blur-sm shadow-md'
    )"
  >
    <div :class="cn('container mx-auto flex items-center justify-between h-20 px-6 transition-all duration-500')">
      <NuxtLink to="/" class="flex items-center group">
        <img
          src="/enprodes.webp"
          alt="Enprodes"
          :class="cn(
            'h-10 w-auto transition-all duration-500',
            scrolled ? 'brightness-0 invert' : ''
          )"
        />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <Button
          v-for="item in navItems"
          :key="item.href"
          variant="ghost"
          as-child
          :class="cn(
            'transition-all duration-300 font-light',
            scrolled
              ? 'text-white/90 hover:bg-white/10 hover:text-white'
              : 'hover:bg-accent hover:text-accent-foreground'
          )"
        >
          <NuxtLink :to="item.href">
            {{ item.label }}
          </NuxtLink>
        </Button>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <Button
          :class="cn(
            'transition-all duration-300 font-light',
            scrolled
              ? 'bg-white text-secondary hover:bg-white/90'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          )"
        >
          Contato
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        class="md:hidden"
        :class="cn(
          'transition-all duration-300',
          scrolled ? 'text-white hover:bg-white/10' : ''
        )"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
        <X v-else class="h-5 w-5" />
      </Button>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="mobileMenuOpen"
        :class="cn(
          'md:hidden border-t mt-2',
          scrolled ? 'border-white/10' : 'border-border/50'
        )"
      >
        <div class="p-4 space-y-2">
          <Button
            v-for="item in navItems"
            :key="item.href"
            variant="ghost"
            as-child
            class="w-full justify-start"
            :class="cn(
              'transition-all duration-300 font-light',
              scrolled
                ? 'text-white/90 hover:bg-white/10 hover:text-white'
                : ''
            )"
            @click="mobileMenuOpen = false"
          >
            <NuxtLink :to="item.href">
              {{ item.label }}
            </NuxtLink>
          </Button>

          <div class="pt-2">
            <Button
              class="w-full"
              :class="cn(
                'transition-all duration-300 font-light',
                scrolled
                  ? 'bg-white text-secondary hover:bg-white/90'
                  : 'bg-primary hover:bg-primary/90'
              )"
            >
              Contato
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { label: 'Contato', href: '/contato' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
