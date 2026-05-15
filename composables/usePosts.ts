import type { Post } from '@/components/PostCard.vue'

export interface FullPost extends Post {
  readingTime: number
  author: string
  authorRole: string
  tags: string[]
}

const posts: FullPost[] = [
  {
    slug: 'post-exemplo-1',
    title: 'Título do post de exemplo',
    excerpt: 'Resumo curto do post que aparece no card. Substitua este texto pelo seu conteúdo real quando publicar a primeira atualização.',
    category: 'Projetos',
    date: '—',
    readingTime: 5,
    author: 'Equipe Enprodes',
    authorRole: 'Engenharia',
    tags: ['Infraestrutura', 'Engenharia', 'Segurança']
  },
  {
    slug: 'post-exemplo-2',
    title: 'Título do post de exemplo',
    excerpt: 'Resumo curto do post que aparece no card. Substitua este texto pelo seu conteúdo real quando publicar a primeira atualização.',
    category: 'Tecnologia',
    date: '—',
    readingTime: 4,
    author: 'Equipe Enprodes',
    authorRole: 'Tecnologia',
    tags: ['Inovação', 'BIM']
  },
  {
    slug: 'post-exemplo-3',
    title: 'Título do post de exemplo',
    excerpt: 'Resumo curto do post que aparece no card. Substitua este texto pelo seu conteúdo real quando publicar a primeira atualização.',
    category: 'Eventos',
    date: '—',
    readingTime: 3,
    author: 'Equipe Enprodes',
    authorRole: 'Comunicação',
    tags: ['Eventos']
  }
]

export const usePosts = () => {
  const list = () => posts
  const findBySlug = (slug: string) => posts.find((p) => p.slug === slug)
  const related = (slug: string, limit = 3) =>
    posts.filter((p) => p.slug !== slug).slice(0, limit)

  return { list, findBySlug, related }
}
