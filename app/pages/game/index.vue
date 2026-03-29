<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'

const client = useSanityClient()

const gamesQuery = groq`
  *[_type == "game"] | order(priority asc){
    _id,
    priority,
    hero,
    title,
    "cover": cover[]{
      _type,
      asset->{_id, url},
      alt
    },
  }
`

const { data: games } = useAsyncData('games', () => client.fetch(gamesQuery))

</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <NuxtLink v-for="game in games" :key="game._id" :to="`/game/${game._id}`">
      {{ game }}
    </NuxtLink>
  </div>
</template>