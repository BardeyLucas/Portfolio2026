<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'

const client = useSanityClient()

const bookQuery = groq`
  *[_type == "book"]{
    _id,
    priority,
    title,
    "cover": cover[]{
      _type,
      asset->{_id, url},
      alt
    },
    "etiquettes": etiquettes[affichage == true]{
      label,
      affichage
    },
    description
  }
`

const { data: books } = useAsyncData('books', () => client.fetch(bookQuery))

</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <NuxtLink v-for="book in books" :key="book._id" :to="`/book/${book._id}`">
      {{ book.title }}
    </NuxtLink>
  </div>
</template>