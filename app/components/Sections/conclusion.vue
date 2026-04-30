<script setup lang="ts">
import type { Game } from '~/types/api/game';
import { h, type Slots } from 'vue';
import { PortableText } from '@portabletext/vue'

const props = defineProps<{
    color1: string
    color2: string
    game: Game
}>()

const portableTextComponents = {
  block: {
    normal: (_: unknown, { slots }: { slots: Slots }) => h('p', { class: 'text-xs lg:text-base' }, slots.default?.()),
  },
}
</script>
<template>
    <section class="stack-section" style="--z: 12" :style="{  'background-color': `var(${props.color1})` }">
        <article class="stack-panel px-5 lg:px-12 pt-12 lg:pt-36 pb-12 relative grille lg:content-start">
            <h2 class="text-2xl lg:text-5xl mb-6 lg:mb-12 col-span-12">Conclusion</h2>
            <div class="col-span-12 lg:col-span-7 flex flex-col gap-5 lg:gap-10 p-5 lg:p-10 h-full" :style="{ 'background-color': `var(${props.color2})` }">
                <h3 class="text-xl lg:text-4xl font-outfit">Conclusion globale</h3>
                <PortableText :value="game.conclusion?.conclusionGlobal" :components="portableTextComponents"/>
            </div>
            <div class="col-span-12 lg:col-span-5 flex flex-col gap-5 lg:gap-10 p-5 lg:p-10 lg:h-full mt-5 lg:mt-0" :style="{ 'background-color': `var(${props.color2})` }">
                <h3 class="text-xl lg:text-4xl font-outfit">Ce que j'en retiens</h3>
                <PortableText :value="game.conclusion?.retenu" :components="portableTextComponents"/>
            </div>
        </article>
    </section>
</template>
