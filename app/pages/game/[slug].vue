<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'
import { useRoute } from 'vue-router'
const { urlFor } = useSanityImage()

const route = useRoute()

const client = useSanityClient()

const gamesQuery = groq`
  *[_type == "game" && _id == $id][0]{
    _id,
    priority,
    hero,
    title,
    "cover": cover[]{
      _type,
      asset->{_id, url},
      alt
    },
    "etiquettes": etiquettes[affichage == true]{
      label,
      affichage
    }
  }
`

const { data: game } = useAsyncData('game', () => client.fetch(gamesQuery, { id: route.params.slug }))

const getCoverUrl = (cover?: Array<{ _type: string; asset: { _id: string; url: string }; alt?: string }>) => {
  const firstCover = cover?.[0]
  return firstCover ? (urlFor(firstCover)?.url() ?? '') : ''
}

console.log("slug: ", route.params.slug)

import { useSectionScript } from '~/composables/sectionScript'

useSectionScript()
</script>
<template>
  <main class="w-full">
    <section class="w-full h-screen flex items-center justify-center stack-section" style="--z: 1">
      <img
        class="absolute top-0 left-0 w-full h-full object-cover object-center m-0"
        :alt="game?.cover?.[0]?.alt || game?.title || 'Image du jeu'"
        :src="getCoverUrl(game?.cover)"
      />
      <div class="absolute bottom-0 left-0 w-full h-40 flex flex-col gap-4 items-start justify-center px-12 bg-gradient-to-t from-[var(--color-Darker)] via-[#0D0D0D66] via-80% to-transparent font-outfit">
        <h1 class="text-6xl">{{ game?.title }}</h1>
        <div class="flex gap-2.5 text-xl">
          <p v-for="etiquette in game?.etiquettes" :key="etiquette.label" class="bg-[#008800] text-[var(--color-White)] px-4 py-1 rounded-full">{{ etiquette.label }}</p>   
        </div>
      </div>
    </section>
    <section class="bg-[var(--color-Darker)] stack-section" style="--z: 2">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Medium)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[url('~/assets/images/KinadoIsland_Ss_Door.png')] bg-cover bg-center stack-section" style="--z: 3">
        <article class="stack-panel bg-[#222222E6]">
        </article>
    </section>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Medium)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Light)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Light)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Darker)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Light)] stack-section" style="--z: 3">
        <article class="stack-panel">
        </article>
    </section>
  </main>
</template>