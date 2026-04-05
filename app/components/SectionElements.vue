<script setup lang="ts">
import type { Game } from '~/types/api/game';
import { PortableText } from '@portabletext/vue'

const props = defineProps<{
    sectionNumber: number
    subject: keyof Game
    game: Game
}>()

const emit = defineEmits<{
    (e: 'select', index: number): void
}>()

const selector = ref(0)
const list = computed(() => (props.game[props.subject] as any[]) || [])

const portableTextComponents = {
  block: {
    normal: (_: any, { slots }: any) => h('p', { class: 'text-2xl text-left' }, slots.default?.()),
  },        
}

</script>
<template>
    <section v-if="sectionNumber == 4" class="w-full h-full grid grid-cols-2 grid-rows-2">
        <button v-for="(item, index) in list.slice(0, 4)" :key="index" @click="selector = index; $emit('select', index)" class="col-span-1 row-span-1 bg-[#000000] relative">
            <img class="w-full h-full bg-cover bg-center absolute top-0 left-0 opacity-20 transition-opacity duration-300" :class="{'opacity-90': selector == index}" :src="item?.image?.asset?.url" :alt="item?.image?.alt">
            <div class="w-full h-full absolute top-0 left-0 flex items-end p-5">
                <PortableText :value="item?.resume" :components="portableTextComponents" />
            </div>
        </button>
    </section>
    <section v-else class="w-full h-full grid grid-cols-3 grid-rows-3">
        <button v-for="(item, index) in list.slice(0, 9)" :key="index" @click="selector = index; $emit('select', index)" class="col-span-1 row-span-1 bg-[#000000] relative">
            <img class="w-full h-full bg-cover bg-center absolute top-0 left-0 opacity-20 transition-opacity duration-300" :class="{'opacity-90': selector == index}" :src="item?.image?.asset?.url" :alt="item?.image?.alt">
            <div class="w-full h-full absolute top-0 left-0 flex items-end p-5">
                <PortableText :value="item?.resume" :components="portableTextComponents" />
            </div>
        </button>
    </section>
</template>