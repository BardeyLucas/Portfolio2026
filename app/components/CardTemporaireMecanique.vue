<script lang="ts" setup>
import type { GameMecanique } from '~/types/api/game';
import { PortableText } from '@portabletext/vue'
import { h, type Slots } from 'vue'

const props = defineProps<{
    color: string
    center?: boolean
    mecanique?: GameMecanique
}>()

const portableTextComponents = {
  block: {
    h5: (_: unknown, { slots }: { slots: Slots }) => h('h5', { class: 'text-sm lg:text-2xl font-bold lg:font-normal font-outfit lg:mb-2.5' }, slots.default?.()),
normal: (_: unknown, { slots }: { slots: Slots }) => h('p', { class: 'text-xs lg:text-base' }, slots.default?.()),  },
  marks: {
    // Tes 3 couleurs définies dans Sanity
    redText: (_: unknown, { slots }: { slots: Slots }) => h('span', { class: 'text-red-500 font-bold' }, slots.default?.()),
    blueText: (_: unknown, { slots }: { slots: Slots }) => h('span', { class: 'text-blue-500 font-bold' }, slots.default?.()),
    greenText: (_: unknown, { slots }: { slots: Slots }) => h('span', { class: 'text-green-500 font-bold' }, slots.default?.()),
    // Tu peux aussi surcharger les balises par défaut si besoin
    strong: (_: unknown, { slots }: { slots: Slots }) => h('strong', { class: 'font-extra-bold' }, slots.default?.()),
  },
  list: {
    bullet: (_: unknown, { slots }: { slots: Slots }) =>
      h(
        'ul',
        {
          class: 'list-disc space-y-1 px-5 flex flex-col gap-2 text-sm lg:text-base',
        },
        slots.default?.()
      ),
  },
}
</script>
<template>
    <article class="rounded-3xl p-4 lg:p-5 lg:pl-7 flex gap-4 lg:gap-6" :style="{ 'background-color': `var(${color})` }">
        <div class="flex flex-col h-full gap-2.5" :class="{ 'my-auto': mecanique?.center }">
           <img v-for="image in props.mecanique?.images" :key="image._type" class="min-w-12 lg:min-w-24 h-12 lg:h-24" :src="image.asset.url" :alt="image.alt"> 
        </div>
        <div class="flex flex-col items-start gap-2.5">
            <h4 class="text-base lg:text-2xl">{{ props.mecanique?.titre }}</h4>
            <!-- Affichage du texte enrichi -->
            <PortableText v-if="props.mecanique?.texte" :value="props.mecanique.texte" :components="portableTextComponents" />
        </div>
    </article>
</template>