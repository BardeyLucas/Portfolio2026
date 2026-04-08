<script setup lang="ts">
import type { Book } from '~/types/api/book';

const props = defineProps<{
    book: Book
}>()
</script>

<template>
    <div class="bg-[var(--color-Dark)] rounded-[20px] overflow-hidden p-3 flex flex-col gap-3 shadow-[0_0_8px_rgba(255,255,255,0.20)]">
        <div class="w-full aspect-square flex pt-8 items-end rounded-[20px] bg-cover bg-center flex-shrink-0 inset-shadow-[0_0_8px_rgba(0,0,0,0.75)]" :style="{ backgroundImage: `url(${props.book.cover?.[0]?.asset?.url})` }"/>
        <div class="w-full flex-grow flex justify-between items-center px-4 gap-4">
            <h3 class="font-outfit text-3xl">{{ props.book.tinyTitle }}</h3>
            <NuxtLink 
              :to="`/book/${props.book._id}`" 
              class="text-white bg-[#00000099] duration-300 text-nowrap text-2xl px-3 py-1.5 rounded-lg shadow-[0_0_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] active:bg-[#000000] active:mt-1"
            >
              Voir plus
            </NuxtLink>
        </div>
    </div>
    <!-- <div class="aspect-square bg-[var(--color-Medium)] flex items-end mt-20 rounded-[40px] bg-cover bg-center overflow-hidden" :style="{ backgroundImage: `url(${props.book.cover?.[0]?.asset?.url})` }">
        <div class="w-full flex justify-between items-center h-20 px-8 bg-gradient-to-t from-[#000000B3] via-[#00000099] via-20% to-transparent">

        </div>
    </div> -->
</template>