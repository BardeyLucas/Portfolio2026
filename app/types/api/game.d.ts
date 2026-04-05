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

export type GameMap = {
  id: number
  titre: string
  texte: any[]
  images?: {
    _type: 'image'
    asset: {
      _id: string
      url?: string
    }
    alt: string
  }
}

export type GameInspiration = {
  titre: string
  resume: any[]
  description: any[]
  image?: {
    _type: 'image'
    asset: {
      _id: string
      url?: string
    }
    alt: string
  }
}

export type GameAjout = {
  texte: string
  cote: boolean
}

export type GameAjouts = {
  firstTexte?: any[]
  liste?: GameAjout[]
  endTexte?: string
}

export type Game = {
  _id: string
  priority: number
  hero: boolean
  title: string
  cover: GameCover[]
  etiquettes: GameEtiquette[]
  mecanique?: GameMecanique[]
  mapping?: GameMap[]
  inspirations?: GameInspiration[]
  ajouts?: GameAjouts
}