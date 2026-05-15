<template>
  <NuxtLayout name="default">
    <div class="min-h-screen">
      <article class="pt-32 pb-16">
        <div class="container mx-auto px-6">
          <div class="max-w-3xl mx-auto mb-8">
            <NuxtLink to="/atualizacoes" class="inline-flex items-center text-muted-foreground hover:text-enprodes-blue font-light text-sm transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Voltar para Atualizações
            </NuxtLink>
          </div>

          <header v-reveal class="max-w-3xl mx-auto mb-10">
            <div class="flex items-center gap-3 mb-6 text-sm text-muted-foreground font-light">
              <span class="px-3 py-1 rounded-md bg-enprodes-blue/10 text-enprodes-blue">
                {{ post.category }}
              </span>
              <span>{{ post.date }}</span>
              <span class="text-muted-foreground/50">•</span>
              <span>{{ post.readingTime }} min de leitura</span>
            </div>

            <h1 class="text-4xl md:text-5xl font-light leading-tight mb-6">
              {{ post.title }}
            </h1>

            <p class="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center gap-4 pb-8 border-b">
              <div class="h-12 w-12 rounded-full bg-enprodes-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-enprodes-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <p class="font-light text-sm">{{ post.author }}</p>
                <p class="text-xs text-muted-foreground font-light">{{ post.authorRole }}</p>
              </div>
            </div>
          </header>

          <div v-reveal class="max-w-4xl mx-auto mb-12">
            <div class="relative h-72 md:h-96 rounded-2xl bg-muted/20 border flex items-center justify-center overflow-hidden">
              <p class="text-muted-foreground font-light">Imagem de capa do post</p>
            </div>
          </div>

          <!-- Grid 3 colunas: share | conteúdo | espaço de respiro -->
          <div class="grid grid-cols-1 lg:grid-cols-[80px_minmax(0,_3fr)_80px] gap-8 max-w-5xl mx-auto">
            <aside class="hidden lg:flex flex-col items-center gap-2 sticky top-32 self-start">
              <p class="text-[10px] text-muted-foreground font-light uppercase tracking-widest mb-2">
                Compartilhar
              </p>
              <ShareButtons :url="pageUrl" :title="post.title" orientation="vertical" />
            </aside>

            <div class="min-w-0">
              <div class="prose-content space-y-6 font-light text-foreground/90 leading-relaxed">
                <p class="text-lg">
                  Este é um parágrafo de introdução do post. Quando você publicar o conteúdo real, este texto pode trazer um resumo aprofundado do tema e contextualizar o leitor sobre o que será abordado ao longo do artigo.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Aliquam erat volutpat. Sed at risus eu eros mattis pretium. Nullam id velit at justo bibendum dictum.
                </p>

                <h2 class="text-2xl font-light pt-6 pb-2">Subtítulo de seção</h2>

                <p>
                  Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.
                </p>

                <ul class="list-disc pl-6 space-y-2">
                  <li>Item de lista um — exemplo de bullet point dentro do conteúdo</li>
                  <li>Item de lista dois — segundo ponto relevante</li>
                  <li>Item de lista três — terceiro destaque do tema</li>
                </ul>

                <blockquote class="border-l-4 border-enprodes-blue pl-6 py-2 my-8 italic text-muted-foreground">
                  "Uma citação em destaque pode ser usada para ressaltar uma fala ou um ponto importante no decorrer do post."
                </blockquote>

                <h2 class="text-2xl font-light pt-6 pb-2">Outro subtítulo</h2>

                <p>
                  Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>

                <div class="relative h-72 rounded-xl bg-muted/20 border flex items-center justify-center my-8">
                  <p class="text-sm text-muted-foreground font-light">Imagem ilustrativa no meio do post</p>
                </div>

                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.
                </p>

                <h3 class="text-xl font-light pt-4 pb-2">Conclusão</h3>

                <p>
                  Fechamento do post, com uma chamada para reflexão ou ação. Você pode encerrar convidando o leitor a conhecer mais sobre o tema, baixar um material ou entrar em contato com a equipe.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t">
                <span class="text-sm text-muted-foreground font-light mr-2">Tags:</span>
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-muted text-sm font-light"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="lg:hidden mt-10 pt-8 border-t">
                <p class="text-sm font-light mb-4">Compartilhar este post</p>
                <ShareButtons :url="pageUrl" :title="post.title" orientation="horizontal" />
              </div>
            </div>

            <div class="hidden lg:block"></div>
          </div>
        </div>
      </article>

      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 v-reveal class="text-3xl font-light text-center mb-12">Continue lendo</h2>
          <div v-reveal-stagger="{ stagger: 0.1 }" class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PostCard
              v-for="related in relatedPosts"
              :key="related.slug"
              :post="related"
              variant="compact"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const route = useRoute()
const pageUrl = ref('')

const { findBySlug, related } = usePosts()

const post = computed(() => {
  const slug = String(route.params.slug)
  return (
    findBySlug(slug) ?? {
      slug,
      title: 'Post não encontrado',
      excerpt: '',
      category: '—',
      date: '—',
      readingTime: 0,
      author: 'Equipe Enprodes',
      authorRole: '',
      tags: []
    }
  )
})

const relatedPosts = computed(() => related(String(route.params.slug)))

onMounted(() => {
  pageUrl.value = window.location.href
})

useHead(() => ({
  title: `${post.value.title} - Enprodes`,
  meta: [{ name: 'description', content: post.value.excerpt }]
}))
</script>
