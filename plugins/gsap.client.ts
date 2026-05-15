import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { DirectiveBinding } from 'vue'

gsap.registerPlugin(ScrollTrigger)

interface RevealOptions {
  y?: number
  x?: number
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  once?: boolean
}

const setupReveal = (el: HTMLElement, options: RevealOptions, targets?: HTMLElement | HTMLElement[]) => {
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

export default defineNuxtPlugin((nuxtApp) => {
  // v-reveal: anima o próprio elemento ao entrar no viewport
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding: DirectiveBinding<RevealOptions | undefined>) {
      setupReveal(el, binding.value ?? {})
    }
  })

  // v-reveal-stagger: anima os filhos do elemento (cards de uma grid, por exemplo)
  nuxtApp.vueApp.directive('reveal-stagger', {
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
