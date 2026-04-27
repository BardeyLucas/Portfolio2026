<script setup lang="ts">
import type { Game } from '~/types/api/game';
import { PortableText } from '@portabletext/vue'
import { h, type Slots } from 'vue'
import type { TypedObject } from '@portabletext/types'

interface ListItem {
  image?: { asset?: { url: string }, alt?: string }
  titre?: string
  description?: TypedObject[]
}


const props = defineProps<{
    subject: keyof Game
    sectionTitle: string
    sousSectionTitle?: string
    color1: string
    color2?: string
    sousSection: boolean
    sectionNumber: number
    game: Game
}>()

const selector = ref(0)
const list = computed(() => (props.game[props.subject] as ListItem[]) || [])

const portableTextComponents = {
  block: {
    h3: (_: unknown, { slots }: { slots: Slots }) => h('h3', { class: 'text-sm lg:text-2xl font-outfit lg:mt-6' }, slots.default?.()),
    normal: (_: unknown, { slots }: { slots: Slots }) => h('p', { class: 'text-[0.5rem] lg:text-lg' }, slots.default?.()),
  },        
}
</script>
<template>
    <section class="stack-section" style="--z: 9" :style="{ 'background-color': `var(${color1})` }">
        <article class="stack-panel px-5 lg:px-12 pt-36 pb-12 flex flex-col relative h-auto">
            <h2 class="text-5xl mb-12">{{ sectionTitle }}</h2>
            <section v-if="sousSection" class="w-full flex rounded-3xl p-10 flex-col gap-10 min-h-0" :style="{ 'background-color': `var(${color2})` }">
                <h3 class="text-4xl mb-2">{{ sousSectionTitle }}</h3>
                <section class="w-full aspect-2/1 flex">
                    <div class="flex-1 h-full bg-[#000000]"><SectionElements :section-number="sectionNumber" :subject="subject" :game="game" @select="selector = $event"/></div>
                    <div class="flex-1 h-full relative bg-[#000000]">
                        <img v-if="list[selector]?.image?.asset?.url" class="w-full h-full object-cover object-center absolute top-0 left-0 transition-all duration-300 opacity-30" :src="list[selector]?.image?.asset?.url" :alt="list[selector]?.image?.alt">
                        <div class="w-full h-full absolute top-0 left-0 px-5 lg:px-12 py-8 lg:py-20 flex flex-col gap-12">
                            <h3 class="text-5xl font-outfit">{{ list[selector]?.titre }}</h3>
                            <PortableText :value="list[selector]?.description || []" :components="portableTextComponents" />
                        </div>
                    </div>
                </section>
            </section>
            <section v-else class="w-full aspect-1/2 lg:aspect-2/1 flex flex-col lg:flex-row">
                <div class="flex-1 h-full bg-[#000000]"><SectionElements :section-number="sectionNumber" :subject="subject" :game="game" @select="selector = $event"/></div>
                <div class="flex-1 h-full relative bg-[#000000]">
                    <img v-if="list[selector]?.image?.asset?.url" class="w-full h-full object-cover object-center absolute top-0 left-0 transition-all duration-300 opacity-30" :src="list[selector]?.image?.asset?.url" :alt="list[selector]?.image?.alt">
                    <div class="w-full h-full absolute top-0 left-0 p-5 lg:px-12 lg:py-8 lg:py-20 flex flex-col gap-1 lg:gap-3">
                        <h3 class="text-2xl lg:text-5xl font-outfit mb-2 lg:mb-12">{{ list[selector]?.titre }}</h3>
                        <PortableText :value="list[selector]?.description || []" :components="portableTextComponents" />
                    </div>
                </div>
            </section>
        </article>
    </section>
</template>