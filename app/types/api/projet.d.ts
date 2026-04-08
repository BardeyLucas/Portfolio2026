export type ProjetCover = {
  _type: 'image'
  asset: {
    _id: string
    url?: string
  }
  alt: string
}

export type ProjetHeroCover = {
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
  _type: 'projet' | 'game'
  priority: number
  hero: boolean
  title: string
  tinyTitle: string
  typeLabel: 'projet' | 'jeu' | 'inconnu'
  cover: ProjetCover[]
  heroImage?: ProjetHeroCover[]
  etiquettes: ProjetEtiquette[]
}