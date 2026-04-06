<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'

const client = useSanityClient()

const projetsQuery = groq`
  *[_type == "projet"]{
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

const { data: projets } = useAsyncData('projets', () => client.fetch(projetsQuery))

</script>
<template>
    <div class="h-screen flex flex-col items-center justify-center">
        <NuxtLink v-for="projet in projets" :key="projet._id" :to="`/projet/${projet._id}`">
            {{ projet.title }}
        </NuxtLink>
    </div>
</template>