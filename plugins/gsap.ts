import type { DirectiveBinding } from 'vue'

interface RevealOptions {
  y?: number
  x?: number
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  once?: boolean
}

export default defineNuxtPlugin(async (nuxtApp) => {
  // No SSR: registra diretivas como no-op com getSSRProps (evita erro)
  if (import.meta.server) {
    const noop = {
      getSSRProps: () => ({})
    }
    nuxtApp.vueApp.directive('reveal', noop)
    nuxtApp.vueApp.directive('reveal-stagger', noop)
    return
  }

  // Client: carrega GSAP e registra as diretivas reais
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger')
  ])

  gsap.registerPlugin(ScrollTrigger)

  const setupReveal = (
    el: HTMLElement,
    options: RevealOptions,
    targets?: HTMLElement | HTMLElement[]
  ) => {
    const {
      y = 24,
      x = 0,
      delay = 0,
      duration = 0.8,
      stagger = 0,
      start = 'top 85%',
      once = true
    } = options

    const animTargets = targets ?? el

    gsap.set(animTargets, { opacity: 0, y, x })

    ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () => {
        gsap.to(animTargets, {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          stagger,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      }
    })
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding: DirectiveBinding<RevealOptions | undefined>) {
      setupReveal(el, binding.value ?? {})
    }
  })

  nuxtApp.vueApp.directive('reveal-stagger', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding: DirectiveBinding<RevealOptions | undefined>) {
      const children = Array.from(el.children) as HTMLElement[]
      if (children.length === 0) return
      setupReveal(el, { stagger: 0.08, ...(binding.value ?? {}) }, children)
    }
  })

  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})
