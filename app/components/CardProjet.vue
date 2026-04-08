<script setup lang="ts">
import type { Projet } from '~/types/api/projet';


const props = defineProps<{
    projet: Projet
}>()

</script>

<template>
    <div class="col-span-5 odd:col-start-2 even:col-start-7 bg-[var(--color-Dark)] rounded-[40px] overflow-hidden py-5 px-3 flex flex-col gap-5 shadow-[0_0_8px_rgba(255,255,255,0.20)]">
        <div class="w-full aspect-[1920/1080] flex pt-8 items-end rounded-[40px] bg-cover bg-center flex-shrink-0 inset-shadow-[0_0_8px_rgba(0,0,0,0.75)]" :style="{ backgroundImage: `url(${props.projet.cover?.[0]?.asset?.url})` }"/>
        <div class="w-full flex-grow flex justify-between items-center px-8 gap-4">
            <h3 class="font-outfit text-4xl">{{ props.projet.tinyTitle }}</h3>
            <NuxtLink 
              :to="`/${props.projet.typeLabel === 'jeu' ? 'game' : 'projet'}/${props.projet._id}`" 
              class="text-white  bg-[#00000099] duration-300 text-nowrap text-3xl px-4 py-2 rounded-lg shadow-[0_0_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] active:bg-[#000000] active:mt-1"
            >
              Voir plus
            </NuxtLink>
        </div>
    </div>
</template>