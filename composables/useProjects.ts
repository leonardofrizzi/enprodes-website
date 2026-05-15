export interface Project {
  slug: string
  title: string
  category: string
  description: string
  cover?: string
}

const projects: Project[] = [
  {
    slug: 'projeto-exemplo-1',
    title: 'Nome do projeto',
    category: 'Túneis',
    description: 'Breve descrição do projeto. Substitua por uma frase curta destacando escopo, cliente ou resultado.'
  },
  {
    slug: 'projeto-exemplo-2',
    title: 'Nome do projeto',
    category: 'Rodovias',
    description: 'Breve descrição do projeto. Substitua por uma frase curta destacando escopo, cliente ou resultado.'
  },
  {
    slug: 'projeto-exemplo-3',
    title: 'Nome do projeto',
    category: 'Smart Cities',
    description: 'Breve descrição do projeto. Substitua por uma frase curta destacando escopo, cliente ou resultado.'
  },
  {
    slug: 'projeto-exemplo-4',
    title: 'Nome do projeto',
    category: 'Indústrias',
    description: 'Breve descrição do projeto. Substitua por uma frase curta destacando escopo, cliente ou resultado.'
  },
  {
    slug: 'projeto-exemplo-5',
    title: 'Nome do projeto',
    category: 'Pedágios',
    description: 'Breve descrição do projeto. Substitua por uma frase curta destacando escopo, cliente ou resultado.'
  },
  {
    slug: 'projeto-exemplo-6',
    title: 'Nome do projeto',
    category: 'Iluminação Pública',
    description: 'Breve descrição do projeto. Substitua por uma frase curta destacando escopo, cliente ou resultado.'
  }
]

export const useProjects = () => {
  const list = () => projects
  const findBySlug = (slug: string) => projects.find((p) => p.slug === slug)
  return { list, findBySlug }
}
