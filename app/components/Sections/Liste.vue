<script setup lang="ts">
import type { Game } from '~/types/api/game';
import { PortableText } from '@portabletext/vue'


const props = defineProps<{
    subject: keyof Game
    sectionTitle: string
    texte?: string
    color1: string
    game: Game
}>()

const ajoutsLeft = computed(() => {
    return props.game.ajouts?.liste?.filter((item) => item.cote === false)
})

const ajoutsRight = computed(() => {
    return props.game.ajouts?.liste?.filter((item) => item.cote === true)
})
</script>
<template>
    <section class="stack-section" style="--z: 10" :style="{ 'background-color': `var(${color1})` }">
        <article class="stack-panel pt-36 pb-12 grille h-auto content-start">
            <h2 class="text-5xl mb-12 col-span-12">{{ sectionTitle }}</h2>
            <div class="col-span-12 text-3xl mb-20">
                <PortableText v-if="game.ajouts?.firstTexte" :value="game.ajouts?.firstTexte" class="col-span-12 text-lg" />
            </div>
            <ul v-if="ajoutsLeft && ajoutsLeft.length > 0" class="col-span-6 text-2xl list-disc pl-12 flex flex-col gap-7">
                <li v-for="item in ajoutsLeft" :key="item.texte">
                    {{ item.texte }}
                </li>
            </ul>
            <ul v-if="ajoutsRight && ajoutsRight.length > 0" class="col-span-6 text-2xl list-disc pl-12 flex flex-col gap-7">
                <li v-for="item in ajoutsRight" :key="item.texte">
                    {{ item.texte }}
                </li>
                <p>{{ game.ajouts?.endTexte }}</p>
            </ul>
        </article>
    </section>
</template>