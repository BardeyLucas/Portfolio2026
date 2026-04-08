export type BookCover = {
  _type: 'image'
  asset: {
    _id: string
    url?: string
  }
  alt: string
}

export type BookHeroCover = {
  _type: 'image'
  asset: {
    _id: string
    url?: string
  }
  alt: string
}

export type BookEtiquette = {
  label: string
  affichage: boolean
}

export type Book = {
  _id: string
  priority: number
  hero: boolean
  title: string
  tinyTitle: string
  cover: BookCover[]
  heroImage?: BookHeroCover[]
  etiquettes: BookEtiquette[]
  description?: block[]
  proportion: number
}