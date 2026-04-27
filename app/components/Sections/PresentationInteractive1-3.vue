<script setup lang="ts">

import type { Game } from '~/types/api/game';
import { ref, h, type Slots } from 'vue';
import { PortableText } from '@portabletext/vue'

const { urlFor } = useSanityImage()

const props = defineProps<{
    sectionTitle: string
    sousSectionTitle: string
    game: Game
}>()

const activeMapId = ref(0)

const portableTextComponents = {
  block: {
    h5: (_: unknown, { slots }: { slots: Slots }) => h('h5', { class: 'text-2xl font-outfit mb-2.5' }, slots.default?.()),
  },
  marks: {
    redText: (_: unknown, { slots }: { slots: Slots }) => h('span', { class: 'text-red-500 font-bold' }, slots.default?.()),
    blueText: (_: unknown, { slots }: { slots: Slots }) => h('span', { class: 'text-blue-500 font-bold' }, slots.default?.()),
    greenText: (_: unknown, { slots }: { slots: Slots }) => h('span', { class: 'text-green-500 font-bold' }, slots.default?.()),
    strong: (_: unknown, { slots }: { slots: Slots }) => h('strong', { class: 'font-extra-bold' }, slots.default?.()),
  },
}
</script>
<template>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 8">
        <article class="stack-panel px-12 pt-36 pb-12 flex flex-col relative h-screen max-h-screen">
            <h2 class="text-5xl mb-12">{{ sectionTitle }}</h2>
            <section class="w-full bg-[var(--color-Darker)] flex-1 flex rounded-3xl p-10 flex-col gap-10 min-h-0">
                <h3 class="text-4xl mb-2">{{ sousSectionTitle }}</h3>
                <div class="w-full flex-1 flex flex-col gap-12 min-h-0">
                    <div class="w-full flex-1 flex gap-12 min-h-0">
                        <section v-for="map in props.game.mapping" v-show="map.id === activeMapId" :key="map.id" class="flex flex-col gap-10 flex-1 min-h-0 overflow-y-auto">
                            <h4 class="text-5xl font-bold">{{ map.titre }}</h4>
                            <PortableText :value="map.texte" :components="portableTextComponents" />
                        </section>
                        <section class="h-full relative flex gap-5 justify-end shrink-0">
                            <div class="h-full aspect-[210/297] bg-[var(--color-Medium)] shrink-0">
                                <img v-if="props.game.mapping?.[activeMapId]?.images" class="w-full h-full object-cover" :src="urlFor(props.game.mapping![activeMapId]!.images!)?.url()">
                            </div>
                            <div class="flex flex-col gap-5 relative h-full items-start shrink-0">
                                <button class="h-[calc((100%-2.5rem)/3)] aspect-[210/297] bg-[var(--color-Medium)]" @click="activeMapId = 0"><img :src="urlFor(props.game.mapping![0]!.images!)?.url()" alt=""></button>
                                <button class="h-[calc((100%-2.5rem)/3)] aspect-[210/297] bg-[var(--color-Medium)]" @click="activeMapId = 1"><img :src="urlFor(props.game.mapping![1]!.images!)?.url()" alt=""></button>
                                <button class="h-[calc((100%-2.5rem)/3)] aspect-[210/297] bg-[var(--color-Medium)]" @click="activeMapId = 2"><img :src="urlFor(props.game.mapping![2]!.images!)?.url()" alt=""></button>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </article>
    </section>
</template>