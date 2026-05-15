<template>
  <header
    :class="cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      !isHomePage
        ? mobileMenuOpen
          ? 'bg-white shadow-xl'
          : 'bg-primary shadow-xl'
        : scrolled
          ? 'bg-primary shadow-xl'
          : mobileMenuOpen
            ? 'bg-white shadow-xl'
            : 'bg-gradient-to-b from-black/40 to-transparent'
    )"
  >
    <div :class="cn('container mx-auto flex items-center justify-between h-20 px-6 transition-all duration-500')">
      <NuxtLink to="/" class="flex items-center group">
        <img
          src="/enprodes.webp"
          alt="Enprodes"
          :class="cn(
            'h-10 w-auto transition-all duration-500',
            mobileMenuOpen ? '' : 'brightness-0 invert'
          )"
        />
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.href"
          :to="item.href"
          :class="cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            'h-10 px-4 py-2',
            'text-white/90 hover:bg-white/10 hover:text-white transition-all duration-300'
          )"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden md:flex items-center gap-3">
        <a
          href="mailto:contato@enprodes.com.br"
          class="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white/90"
        >
          <Mail class="h-5 w-5 text-primary" />
        </a>
        <a
          href="https://instagram.com/enprodes"
          target="_blank"
          rel="noopener noreferrer"
          class="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white/90"
        >
          <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/company/enprodes"
          target="_blank"
          rel="noopener noreferrer"
          class="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white/90"
        >
          <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      <Button
        variant="ghost"
        size="icon"
        :class="cn(
          'md:hidden transition-all duration-300',
          mobileMenuOpen
            ? 'text-black hover:bg-black/10'
            : !isHomePage
              ? 'text-white hover:bg-white/10'
              : 'text-white hover:bg-white/10'
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
          'md:hidden border-t mt-2 border-black/10'
        )"
      >
        <div class="p-4 space-y-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.href"
            :to="item.href"
            @click="mobileMenuOpen = false"
            :class="cn(
              'flex items-center justify-start whitespace-nowrap rounded-md text-sm font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'w-full h-10 px-4 py-2',
              'text-black/90 hover:bg-black/10 hover:text-black'
            )"
          >
            {{ item.label }}
          </NuxtLink>

          <div class="pt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:contato@enprodes.com.br"
              class="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white/90"
            >
              <Mail class="h-5 w-5 text-primary" />
            </a>
            <a
              href="https://instagram.com/enprodes"
              target="_blank"
              rel="noopener noreferrer"
              class="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white/90"
            >
              <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/enprodes"
              target="_blank"
              rel="noopener noreferrer"
              class="h-10 w-10 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-white/90"
            >
              <svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Menu, X, Mail } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Atualizações', href: '/atualizacoes' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { label: 'Contato', href: '/contato' },
]

const isHomePage = computed(() => route.path === '/')

const handleScroll = () => {
  // Hero section is 100vh, so we check if we've scrolled past it
  scrolled.value = window.scrollY > window.innerHeight - 100
}

onMounted(() => {
  // Só adiciona scroll listener na homepage
  if (isHomePage.value) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  mobileMenuOpen.value = false
  // Remove/adiciona scroll listener baseado na página
  if (route.path === '/') {
    window.addEventListener('scroll', handleScroll)
    scrolled.value = false
  } else {
    window.removeEventListener('scroll', handleScroll)
    scrolled.value = false
  }
})
</script>
