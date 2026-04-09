<script setup lang="ts">
import type { Projet } from '~/types/api/projet';


const props = defineProps<{
    projet: Projet
}>()

</script>

<template>
    <div class="col-span-5 odd:col-start-2 even:col-start-7 h-full flex flex-col gap-4 overflow-hidden">
        <div class="w-full flex-1 bg-[var(--color-Dark)] rounded-[50px] overflow-hidden p-3 flex flex-col gap-5 shadow-[0_0_8px_rgba(255,255,255,0.20)]">
            <div class="w-full aspect-[1920/1080] flex pt-8 items-end rounded-[40px] bg-cover bg-center flex-shrink-0 inset-shadow-[0_0_8px_rgba(0,0,0,0.75)]" :style="{ backgroundImage: `url(${props.projet.cover?.[0]?.asset?.url})` }"/>
            <div class="w-full flex-grow flex justify-between items-center px-8 gap-4">
                <h3 class="font-outfit text-4xl">{{ props.projet.tinyTitle }}</h3>
                <NuxtLink 
                :to="`/${props.projet.typeLabel === 'jeu' ? 'game' : 'projet'}/${props.projet._id}`" 
                class="text-white  bg-[#00000099] duration-300 text-nowrap text-3xl px-4 py-2 rounded-xl shadow-[0_0_4px_rgba(255,255,255,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] active:bg-[#000000]"
                >
                Voir plus
                </NuxtLink>
            </div>
        </div>
        <div class="flex gap-x-2 gap-y-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-[var(--color-Medium)] [&::-webkit-scrollbar-thumb]:bg-[var(--color-Light)] [&::-webkit-scrollbar-thumb:hover]:bg-[#666666] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-3 [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-content">
            <div v-for="etiquette in props.projet.etiquettes" :key="etiquette.label" class="bg-[#2B7A00] text-white px-3 py-1 rounded-full text-nowrap">
                {{ etiquette.label }}
            </div>
        </div>
    </div>
</template>