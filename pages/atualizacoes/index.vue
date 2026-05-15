<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <section class="pt-32 pb-16">
        <div class="container mx-auto px-6">
          <div v-reveal class="text-center max-w-3xl mx-auto mb-16">
            <h1 class="text-4xl font-light mb-4">Feed de Atualizações</h1>
            <p class="text-lg text-muted-foreground font-light">
              Acompanhe novidades, projetos e conteúdos técnicos da Enprodes.
            </p>
          </div>

          <div v-reveal-stagger="{ stagger: 0.1 }" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <PostCard v-for="post in posts" :key="post.slug" :post="post" />
          </div>

          <div class="text-center">
            <p class="text-sm text-muted-foreground font-light italic">
              Em breve, mais conteúdos.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { list } = usePosts()
const posts = list()

useHead({
  title: 'Feed de Atualizações - Enprodes',
  meta: [
    {
      name: 'description',
      content: 'Feed de atualizações da Enprodes. Acompanhe novidades, projetos e conteúdos técnicos.'
    }
  ]
})
</script>
