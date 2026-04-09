<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'

const client = useSanityClient()

const mixedQuery = groq`
  *[_type in ["game", "projet"]] | order(priority asc){
    _id,
    priority,
    hero,
    title,
    tinyTitle,
    "typeLabel": select(
    _type == "game" => "jeu",
      _type == "projet" => "projet",
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
        <section class="inset-shadow-[0_8px_8px_rgba(255,255,255,0.20)] pb-20 -mb-8">
            <div class="w-fit mx-auto flex flex-col items-center py-12 gap-1">
                <h2 class="text-center text-7xl">Projets</h2>
                <div class="w-[calc(100%+10px)] h-1 bg-[var(--color-White)] my-4 opacity-80"/>
            </div>
            <article class="grille items-stretch gap-y-10">
                <CardProjet v-for="projet in projets" :key="projet._id" :projet="projet" />
            </article>
        </section>
        <section class="grille inset-shadow-[0_8px_8px_rgba(255,255,255,0.20)] rounded-t-4xl pb-12">
            <div class="col-span-12">
                <div class="w-fit mx-auto flex flex-col items-center py-12 gap-1">
                    <h2 class="text-center text-7xl">Book</h2>
                    <div class="w-[calc(100%+10px)] h-1 bg-[var(--color-White)] my-4 opacity-80"/>
                </div>
            </div>
            <article class="col-start-2 col-span-10 grid grid-cols-3 gap-x-12 gap-y-10">
                <CardBook v-for="book in books" :key="book._id" :book="book" />
            </article>
        </section>
    </main>
</template>