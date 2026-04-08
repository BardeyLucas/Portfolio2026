<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'

const client = useSanityClient()

const mixedQuery = groq`
  *[_type in ["game", "projet"]] | order(priority desc){
    _id,
    priority,
    hero,
    title,
    tinyTitle,
    "typeLabel": select(
      _type == "projet" => "projet",
      _type == "game" => "jeu",
      "inconnu"
    ),
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

const bookQuery = groq`
  *[_type == "book"]{
    _id,
    priority,
    title,
    tinyTitle,
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

const { data: projets } = useAsyncData('projets', () => client.fetch(mixedQuery))
const { data: books } = useAsyncData('books', () => client.fetch(bookQuery))
</script>

<template>
    <main class="overflow-hidden ">
        <Hero />
        <section>
            <h2 class="text-center">Projets</h2>
            <article class="grille gap-y-10">
                <CardProjet v-for="projet in projets" :key="projet._id" :projet="projet" />
            </article>
        </section>
        <section class="grille">
            <h2 class="text-center col-span-12">Books</h2>
            <article class="col-start-2 col-span-10 grid grid-cols-3 gap-x-12 gap-y-10">
                <CardBook v-for="book in books" :key="book._id" :book="book" />
            </article>
        </section>
    </main>
</template>