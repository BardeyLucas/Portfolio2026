<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'
import { useRoute } from 'vue-router'
import { useSectionScript } from '~/composables/sectionScript'
import { defineAsyncComponent, computed } from 'vue'
import { PortableText } from '@portabletext/vue'

const { urlFor } = useSanityImage()

const route = useRoute()

const client = useSanityClient()

const gamesQuery = groq`
  *[_type == "game" && _id == $id][0]{
    _id,
    priority,
    hero,
    title,
    state,
    "cover": cover[]{
      _type,
      asset->{_id, url},
      alt
    },
    "etiquettes": etiquettes[affichage == true]{
      label,
      affichage
    },
    "mecanique": mecanique[]{
      titre,
      texte,
      center,
      "images": images[]{
        _type,
        asset->{_id, url},
        alt
      },
      categorie,
      position
    },
    "mapping": mapping[]{
      id,
      titre,
      texte,
      "images": images{
        _type,
        asset->{_id, url},
        alt
      }
    },
    "inspirations": inspirations[]{
      titre,
      resume,
      description,
      "image": image{
        _type,
        asset->{_id, url},
        alt
      }
    },
    "ajouts": ajouts{
      firstTexte,
      "liste": liste[]{
        texte,
        cote
      },
      endTexte
    },
    "conclusion": conclusion{
      conclusionGlobal,
      retenu
    },
    downloadLink[]{
      versionName,
      versionNumber,
      versionActuelle,
      operatingSystem,
      url
    },
    details{
      playerNumber,
      langue,
      genre,
      dateDeSortieLastUpdate,
      dateDeSortie{
        type,
        date
      }
    },
    About{
      texte,
      "images": images[]{
        _type,
        asset->{_id, url},
        alt
      }
    },
    "actualite": actualite[]{
      titre,
      "image": image{
        _type,
        asset->{_id, url},
        alt
      },
      resume,
      texte
    },
    "patchNote": patchNote[]{
      titre,
      "image": image{
        _type,
        asset->{_id, url},
        alt
      },
      resume,
      texte
    }
  }
`

const { data: game } = useAsyncData('game', () => client.fetch(gamesQuery, { id: route.params.slug }))

const getCoverUrl = (cover?: Array<{ _type: string; asset: { _id: string; url: string }; alt?: string }>) => {
  const firstCover = cover?.[0]
  return firstCover ? (urlFor(firstCover)?.url() ?? '') : ''
}

useSectionScript()

const GameContentComponent = computed(() => {
  if (!game.value?.title) return null
  
  // On retire les espaces pour correspondre au nom de fichier, par exemple "Kinado Island" -> "KinadoIsland"
  const formattedTitle = game.value.title.replace(/\s+/g, '')
  
  return defineAsyncComponent(() => 
    import(`./GameContent/${formattedTitle}.vue`).catch(() => {
      console.warn(`Aucun contenu spécifique trouvé pour ${formattedTitle}`)
      // Retourne un composant vide ou null si le fichier n'existe pas
      return null
    })
  )
})

const gameDownLoadLinkActuelle = computed(() => {
  return game.value?.downloadLink?.filter((link: { versionActuelle: unknown }) => link.versionActuelle)
})

const gameDownLoadLinkAnterieur = computed(() => {
  return game.value?.downloadLink?.filter((link: { versionActuelle: unknown }) => !link.versionActuelle)
})

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

</script>
<template>
  <main class="w-full">
    <section class="w-full flex-col stack-section" style="--z: 1">
      <article class="relative w-full h-screen items-center justify-center">
        <img
          class="absolute top-0 left-0 w-full h-full object-cover object-center m-0"
          :alt="game?.cover?.[0]?.alt || game?.title || 'Image du jeu'"
          :src="getCoverUrl(game?.cover)"
          >
        <div class="absolute bottom-0 left-0 w-full h-40 flex flex-col gap-4 items-start justify-center px-12 bg-gradient-to-t from-[var(--color-Darker)] via-[#0D0D0D66] via-80% to-transparent font-outfit">
          <h1 class="text-6xl">{{ game?.title }}</h1>
          <div class="flex gap-2.5 text-xl">
            <p v-for="etiquette in game?.etiquettes" :key="etiquette.label" class="bg-[#008800] text-[var(--color-White)] px-4 py-1 rounded-full">{{ etiquette.label }}</p>   
          </div>
        </div>
      </article>
      <article class="grille pt-12 pb-24">
        <section class="col-start-2 col-span-6 bg-[var(--color-Dark)] h-fit flex flex-col p-5 gap-5">
          <div class="bg-[var(--color-Medium)] flex flex-col px-7 py-5 gap-5">
            <h2 v-if="game?.state === 'finished'" class="text-2xl font-outfit">Jeu terminé</h2>
            <p v-if="game?.state === 'finished'"><span class="font-bold">Remarque :</span> Le jeu est terminé et il n'est pas prévu qu'il reçoive de nouvelles mises à jour à l'avenir.</p>
            <h2 v-if="game?.state === 'completed'" class="text-2xl font-outfit">Jeu complété</h2>
            <p v-if="game?.state === 'completed'"><span class="font-bold">Remarque :</span> Le jeu est actuellement complet mais il n'est pas exclus qu'il reçoive de nouvelles mises à jour à l'avenir.</p>
            <h2 v-if="game?.state === 'on-hold' || game?.state === 'in-progress'" class="text-2xl font-outfit">Jeu en accès anticipé</h2>
            <p v-if="game?.state === 'on-hold' || game?.state === 'in-progress'"><span class="font-bold">Remarque :</span> Les jeux en accès anticipé ne sont pas terminés, ils peuvent changer de façon significative. Si ce jeu ne vous intéresse pas dans son état actuel, vous devriez attendre pour voir s'il se développe davantage.</p>
            <h2 v-if="game?.state === 'cancelled'" class="text-2xl font-outfit">Jeu annulé</h2>
            <p v-if="game?.state === 'cancelled'"><span class="font-bold">Remarque :</span> Le jeu est annulé, mais il est toujours possible qu'il reçoive des patchs ultérieurement.</p>
          </div>
          <h2 class="text-3xl font-outfit">Version actuelle</h2>
          <cardGameDownload v-for="link in gameDownLoadLinkActuelle" :key="link.url" :download-link="link"/>
          <h2 v-if="gameDownLoadLinkAnterieur?.length" class="text-3xl font-outfit">Version antérieures</h2>
          <cardGameDownload v-for="link in gameDownLoadLinkAnterieur" :key="link.url" :download-link="link"/>
          <button v-if="gameDownLoadLinkAnterieur?.length" class="bg-[var(--color-Medium)] flex flex-col px-7 py-5 gap-5 text-3xl font-outfit w-fit mt-5">Voir toutes les versions</button>
        </section>
        <section class="col-start-8 col-span-4 bg-[var(--color-Dark)] h-fit flex flex-col p-5 gap-2.5">
          <div class="bg-[var(--color-Medium)] flex items-center px-5 py-4 gap-5">
            <IconesGamePlayer class="w-10 h-10"/>
            <p class="font-outfit text-2xl">{{ game?.details?.playerNumber === 'solo' ? 'Solo' : 'Multijoueur' }}</p>
          </div>
          <div class="bg-[var(--color-Medium)] flex items-center px-5 py-4 gap-5">
            <IconesGameLanguage class="w-10 h-10"/>
            <p class="font-outfit text-2xl">{{ game?.details?.langue?.map((l: string) => l === 'fr' ? 'Français' : l === 'en' ? 'Anglais' : l).join(' / ') }}</p>
          </div>
          <div class="bg-[var(--color-Medium)] flex items-center px-5 py-4 gap-5">
            <IconesGameManette class="w-10 h-10"/>
            <p class="font-outfit text-2xl">{{ game?.details?.genre?.map((g: string) => g === 'action-platformer' ? 'Action Platformer' : g === 'narrative-adventure' ? 'Narrative Adventure' : g === 'rpg' ? 'RPG' : g === 'simulation' ? 'Simulation' : g === 'strategy' ? 'Strategy' : g === 'platformer' ? 'Platformer' : g === 'puzzle' ? 'Puzzle' : g === 'collectathon' ? 'Collectathon' : g === 'other' ? 'Autre' : g).join(' / ') }}</p>
          </div>
          <div class="bg-[var(--color-Medium)] flex items-center px-5 py-4 gap-5">
            <IconesGameInfo class="w-10 h-10"/>
            <p class="font-outfit text-2xl">Date de sortie de<br>la dernière mise à jour : {{ formatDate(game?.details?.dateDeSortieLastUpdate) }}</p>
          </div>
          <div class="bg-[var(--color-Medium)] flex items-center px-5 py-4 gap-5">
            <IconesGameInfo class="w-10 h-10"/>
            <p v-if="game?.details?.dateDeSortie?.type === 'release'" class="font-outfit text-2xl">Date de sortie de<br>la version Beta : <span v-if="game?.details?.dateDeSortie?.date">{{ formatDate(game?.details?.dateDeSortie?.date) }}</span><span v-else>Bientôt annoncée</span></p>
            <p v-if="game?.details?.dateDeSortie?.type === 'beta'" class="font-outfit text-2xl">Date de sortie de<br>du jeu : <span v-if="game?.details?.dateDeSortie?.date">{{ formatDate(game?.details?.dateDeSortie?.date) }}</span><span v-else>Bientôt annoncée</span></p>
          </div>
        </section>
      </article>
    </section>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 2">
        <article class="stack-panel grille pt-36 pb-12">
          <div class="col-span-7 flex flex-col justify-center gap-10">
            <h2 class="text-3xl font-outfit">A propos de ce jeu</h2>
            <div class="flex flex-col gap-4 text-lg">
              <PortableText :value="game?.About?.texte"/>
            </div>
          </div>
          <div class="col-span-5 h-full bg-[var(--color-Medium)]">
            <img v-if="game?.About?.images?.[0]" class="w-full h-full object-cover" :src="urlFor(game?.About?.images?.[0])?.url()" :alt="game?.About?.images?.[0]?.alt">
          </div>
        </article>
    </section>
    <section class="bg-[var(--color-Medium)] stack-section" style="--z: 3">
        <article class="stack-panel grille pb-12 pt-36 h-screen">
          <section class="col-span-6 bg-[var(--color-Dark)] flex flex-col p-12 gap-10 rounded-t-2xl h-full overflow-y-auto" style="mask-image: linear-gradient(to bottom, black 50%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);">
            <h2 class="text-3xl font-outfit">Actualités</h2>
            <CardActualites v-for="actualite in game?.actualite" :key="actualite._id" :actualite="actualite"/>
            <p v-if="!game?.actualite?.length" class="text-2xl opacity-80">Aucune actualité pour le moment.</p>
          </section>
          <section class="col-span-6 bg-[var(--color-Dark)] flex flex-col p-12 gap-10 rounded-t-2xl h-full overflow-y-auto" style="mask-image: linear-gradient(to bottom, black 50%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);">
            <h2 class="text-3xl font-outfit overflow-x">Patch notes</h2>
            <CardPatchNotes v-for="patchNote in game?.patchNote" :key="patchNote._id" :patch-note="patchNote"/>
            <p v-if="!game?.patchNote?.length" class="text-2xl opacity-80">Aucun patch note pour le moment.</p>
          </section>
        </article>
    </section>
    <!-- Le composant spécifique au jeu se chargera ici -->
    <component :is="GameContentComponent" v-if="GameContentComponent" :game="game"/>
    <FooterComponents />
  </main>
</template>