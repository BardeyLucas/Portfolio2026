<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'
import { useRoute } from 'vue-router'
const route = useRoute()


const client = useSanityClient()
import type { Game } from '@/types/api/game'
const game = ref<Game | null>(null)


const gamesQuery = groq`
  *[_type == "game" && _id == $id][0]{
    _id,
    title
  }
`
onMounted(async () => {
  game.value = await client.fetch(gamesQuery, { id: route.params.slug })
})

console.log("slug: ", route.params.slug)
</script>
<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <h1>{{ game?.title }}</h1>
  </div>
</template>