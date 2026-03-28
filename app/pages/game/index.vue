<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'

const client = useSanityClient()
import type { Game } from '@/types/api/game'
const games = ref<Game[] | null>(null)


const gamesQuery = groq`
  *[_type == "game"]{
    _id,
    title
  }
`
onMounted(async () => {
  games.value = await client.fetch(gamesQuery)
})

</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <NuxtLink v-for="game in games" :key="game._id" :to="`/game/${game._id}`">
      {{ game.title }}
    </NuxtLink>
  </div>
</template>