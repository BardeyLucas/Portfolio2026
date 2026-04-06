export type ProjetCover = {
  _type: 'image'
  asset: {
    _id: string
    url?: string
  }
  alt: string
}

export type ProjetEtiquette = {
  label: string
  affichage: boolean
}

export type Projet = {
  _id: string
  priority: number
  hero: boolean
  title: string
  cover: ProjetCover[]
  etiquettes: ProjetEtiquette[]
}