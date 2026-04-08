<script setup lang="ts">
import { useSanityClient } from '~/composables/sanity'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { PortableText } from '@portabletext/vue'
import type { Book } from '~/types/api/book'

const client = useSanityClient()

const route = useRoute()

const booksQuery = groq`
*[_type == "book" && _id == $id][0]{
    _id,
    priority,
    title,
    "heroImage": heroImage[]{
      _type,
      asset->{_id, url},
      alt
    },
    "etiquettes": etiquettes[affichage == true]{
      label,
      affichage
    },
    description,
    proportion
  }
`


const { data: book } = useAsyncData<Book>('book', () => client.fetch(booksQuery, { id: route.params.slug }))

const { urlFor } = useSanityImage()
const getCoverUrl = (cover?: Array<{ _type: string; asset: { _id: string; url?: string }; alt?: string }>) => {
  const firstCover = cover?.[0]
  return firstCover ? (urlFor(firstCover)?.url() ?? '') : ''
}

const val1 = computed(() => book.value?.proportion ?? 6)
const val2 = computed(() => 12 - val1.value)

</script>
<template>
  <main class="w-full">
    <section class="w-full grille stack-section" style="--z: 1">
      <div :style="{ gridColumn: `span ${val1} / span ${val1}` }">
        <article class="relative w-full h-screen items-center justify-center">
        <img
          class="absolute top-0 left-0 w-full h-full object-cover object-center m-0"
          :alt="book?.heroImage?.[0]?.alt || book?.title || 'Image du book'"
          :src="getCoverUrl(book?.heroImage)"
          >
        <div class="absolute bottom-0 left-0 w-full h-40 flex flex-col gap-4 items-start justify-center px-10 bg-gradient-to-t from-[var(--color-Darker)] via-[#0D0D0D66] via-80% to-transparent font-outfit">
          <h1 class="text-3xl" :class="val1 != 4 ? 'text-4xl' : ''">{{ book?.title }}</h1>
          <div class="flex gap-2.5 text-base">
            <p v-for="etiquette in book?.etiquettes" :key="etiquette.label" class="bg-[#008800] text-[var(--color-White)] px-2 py-0.5 rounded-full" :class="val1 >= 6 ? 'px-4 py-1' : ''">{{ etiquette.label }}</p>   
          </div>
        </div>
      </article>
      </div>
      <div :style="{ gridColumn: `span ${val2} / span ${val2}` }" class="p-5 flex flex-col justify-center items-start gap-5">
        <PortableText :value="book?.description" />
      </div>
    </section>
  </main>
</template>