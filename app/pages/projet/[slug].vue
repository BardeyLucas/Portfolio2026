<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'
import { useRoute } from 'vue-router'

const client = useSanityClient()

const route = useRoute()

const projetsQuery = groq`
*[_type == "projet" && _id == $id][0]{
_id,
priority,
hero,
title,
"heroImage": heroImage[]{
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

const { data: projet } = useAsyncData('game', () => client.fetch(projetsQuery, { id: route.params.slug }))

const { urlFor } = useSanityImage()
const getCoverUrl = (cover?: Array<{ _type: string; asset: { _id: string; url: string }; alt?: string }>) => {
  const firstCover = cover?.[0]
  return firstCover ? (urlFor(firstCover)?.url() ?? '') : ''
}

</script>
<template>
  <main class="w-full">
    <section class="w-full flex-col stack-section" style="--z: 1">
      <article class="relative w-full h-screen items-center justify-center">
        <img
          class="absolute top-0 left-0 w-full h-full object-cover object-center m-0"
          :alt="projet?.heroImage?.[0]?.alt || projet?.title || 'Image du projet'"
          :src="getCoverUrl(projet?.heroImage)"
          >
        <div class="absolute bottom-0 left-0 w-full h-40 flex flex-col gap-4 items-start justify-center px-12 bg-gradient-to-t from-[var(--color-Darker)] via-[#0D0D0D66] via-80% to-transparent font-outfit">
          <h1 class="text-6xl">{{ projet?.title }}</h1>
          <div class="flex gap-2.5 text-xl">
            <p v-for="etiquette in projet?.etiquettes" :key="etiquette.label" class="bg-[#008800] text-[var(--color-White)] px-4 py-1 rounded-full">{{ etiquette.label }}</p>   
          </div>
        </div>
      </article>
    </section>
  </main>
</template>