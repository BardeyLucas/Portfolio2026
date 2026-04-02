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

export type GameMecanique = {
  titre: string
  texte: any[]
  center: boolean
  images?: {
    _type: 'image'
    asset: {
      _id: string
      url?: string
    }
    alt: string
  }[]
  categorie?: 'base' | 'advanced'
  position?: 'left' | 'right'
}

export type Game = {
  _id: string
  priority: number
  hero: boolean
  title: string
  cover: GameCover[]
  etiquettes: GameEtiquette[]
  mecanique?: GameMecanique[]
}