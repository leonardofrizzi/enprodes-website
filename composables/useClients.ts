export interface Client {
  name: string
  logo: string
}

const clients: Client[] = [
  { name: 'Arteris', logo: '/arteris.webp' },
  { name: 'CCR', logo: '/ccr.webp' },
  { name: 'Tamoios', logo: '/tamoios.webp' },
  { name: 'Odebrecht', logo: '/odebrecht.webp' },
  { name: 'Smartluz', logo: '/smartluz.webp' },
  { name: 'Viário', logo: '/viario.webp' },
  { name: 'Nova 381', logo: '/nova381.webp' },
  { name: 'Motiva', logo: '/motiva.webp' },
  { name: 'Ecorodovias', logo: '/ecorodovias.webp' },
  { name: 'Porto Novo', logo: '/portonovo.webp' },
  { name: 'Rota', logo: '/rota.webp' },
  { name: 'Coqueiros', logo: '/coqueiros.webp' },
  { name: 'Rio', logo: '/rio.webp' },
  { name: 'Paraná', logo: '/parana.webp' },
  { name: 'SPMar', logo: '/spmar.webp' },
  { name: 'Via 040', logo: '/via040.webp' },
  { name: 'Metrô Rio', logo: '/metrorio.svg' },
  { name: 'Bahia', logo: '/bahia.webp' },
  { name: 'Lamsac', logo: '/lamsac.webp' },
  { name: 'Lamsa', logo: '/lamsa.webp' },
  { name: 'Viapar', logo: '/viapar.webp' },
  { name: 'CRT', logo: '/crt.webp' },
  { name: 'Eterc', logo: '/eterc.webp' },
  { name: 'EGTC', logo: '/egtc.webp' },
  { name: 'BR', logo: '/br.webp' }
]

export const useClients = () => {
  return { list: () => clients }
}
