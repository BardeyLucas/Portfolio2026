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
  texte: block[]
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
  texte: block[]
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
  resume: block[]
  description: block[]
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
  firstTexte?: block[]
  liste?: GameAjout[]
  endTexte?: string
}

export type GameConclusion = {
  conclusionGlobal?: block[]
  retenu?: block[]
}

export type GameDownloadLink = {
  versionName: string
  versionNumber: string
  versionActuelle: boolean
  operatingSystem: 'windows' | 'macos' | 'linux'
  url: string
}

export type GameDetailsDateDeSortie = {
  type?: 'beta' | 'release'
  date?: string
}

export type GameDetails = {
  playerNumber: 'solo' | 'multiplayer'
  langue: Array<'fr' | 'en'>
  genre: Array<'action-platformer' | 'narrative-adventure' | 'rpg' | 'simulation' | 'strategy' | 'puzzle' | 'platformer' | 'collectathon' | 'other'>
  dateDeSortieLastUpdate?: string
  dateDeSortie?: GameDetailsDateDeSortie
}

export type GameAbout = {
  texte: block[]
  images?: {
    _type: 'image'
    asset: {
      _id: string
      url?: string
    }
    alt: string
  }[]
}

export type GameActualite = {
  titre: string
  image?: {
    _type: 'image'
    asset: {
      _id: string
      url?: string
    }
    alt: string
  }
  resume?: string
  texte: block[]
}

export type GamePatchNote = {
  titre: string
  image?: {
    _type: 'image'
    asset: {
      _id: string
      url?: string
    }
    alt: string
  }
  resume?: string
  texte: block[]
}

export type GameState = 'cancelled' | 'on-hold' | 'in-progress' | 'completed' | 'finished'

export type Game = {
  _id: string
  priority: number
  hero: boolean
  title: string
  state: GameState
  cover: GameCover[]
  etiquettes: GameEtiquette[]
  mecanique?: GameMecanique[]
  mapping?: GameMap[]
  inspirations?: GameInspiration[]
  ajouts?: GameAjouts
  conclusion?: GameConclusion
  downloadLink?: GameDownloadLink[]
  details?: GameDetails
  About?: GameAbout
  actualite?: GameActualite[]
  patchNote?: GamePatchNote[]
}