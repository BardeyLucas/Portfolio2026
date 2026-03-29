export type GameCover = {
  _type: 'image'
  asset: {
    _id: string
    url?: string
  }
  alt: string
}

export type GameEtiquette = {
  label: string
  affichage: boolean
}

export type Game = {
  _id: string
  priority: number
  hero: boolean
  title: string
  cover: GameCover[]
  etiquettes: GameEtiquette[]
}