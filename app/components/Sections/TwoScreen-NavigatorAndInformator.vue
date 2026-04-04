<script setup lang="ts">

import type { Game } from '~/types/api/game';

const props = defineProps<{
    sectionTitle: string
    sousSectionTitle?: string
    color1: string
    color2?: string
    sousSection: boolean
    sectionNumber: number
    game: Game
}>()

</script>
<template>
    <section class="stack-section" style="--z: 9" :style="{ 'background-color': `var(${color1})` }">
        <article class="stack-panel px-12 pt-36 pb-12 flex flex-col relative h-screen max-h-screen">
            <h2 class="text-5xl mb-12">{{ sectionTitle }}</h2>
            <section v-if="sousSection" class="w-full flex rounded-3xl p-10 flex-col gap-10 min-h-0" :style="{ 'background-color': `var(${color2})` }">
                <h3 class="text-4xl mb-2">{{ sousSectionTitle }}</h3>
                <section class="w-full aspect-2/1 flex">
                    <div class="flex-1 h-full bg-red-950"><SectionElements :sectionNumber="sectionNumber" :game="game"/></div>
                    <div class="flex-1 h-full bg-blue-950"></div>
                </section>
            </section>
            <section v-else class="w-full aspect-2/1 flex">
                <div class="flex-1 h-full bg-red-950"><SectionElements :sectionNumber="sectionNumber" :game="game"/></div>
                <div class="flex-1 h-full bg-blue-950"></div>
            </section>
        </article>
    </section>
</template>