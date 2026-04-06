<script setup lang="ts">
import type { Game } from '~/types/api/game';
import { PortableText } from '@portabletext/vue'

const props = defineProps<{
    color1: string
    color2: string
    game: Game
}>()
</script>
<template>
    <section class="stack-section" style="--z: 12" :style="{ 'background-color': `var(${props.color1})` }">
        <article class="stack-panel px-12 pt-36 pb-12 relative grille content-start">
            <h2 class="text-5xl mb-12 col-span-12">Conclusion</h2>
            <div class="col-span-7 flex flex-col gap-10 p-10 h-full" :style="{ 'background-color': `var(${props.color2})` }">
                <h3 class="text-4xl font-outfit">Conclusion globale</h3>
                <PortableText :value="game.conclusion?.conclusionGlobal" />
            </div>
            <div class="col-span-5 flex flex-col gap-10 p-10 h-full" :style="{ 'background-color': `var(${props.color2})` }">
                <h3 class="text-4xl font-outfit">Ce que j'en retiens</h3>
                <PortableText :value="game.conclusion?.retenu" />
            </div>
        </article>
    </section>
</template>