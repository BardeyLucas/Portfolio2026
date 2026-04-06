<script setup lang="ts">
import type { GameActualite } from '~/types/api/game';


    const props = defineProps<{
        actualite: GameActualite
    }>()
</script>

<template>
    <article class="bg-[var(--color-Darker)] flex p-5 gap-7 h-72 rounded-2xl">
        <div class="flex-1 h-full w-1 rounded-2xl bg-[var(--color-Light)] overflow-hidden">
            <img v-if="props.actualite.image" class="w-full h-full object-cover" :src="props.actualite.image?.asset?.url" :alt="props.actualite.image?.alt || 'Actualité'" >
        </div>
        <div class="flex-1 flex flex-col items-end">
            <div class="h-full flex flex-col justify-center gap-2.5">
                <h3 class="text-2xl font-outfit">{{ props.actualite.titre }}</h3>
                <p class="text-sm opacity-80">{{ props.actualite.resume }}</p>
            </div>
            <!-- <button class="text-xl bg-[var(--color-Darker)] text-[var(--color-White)] py-1 px-2.5 w-fit rounded-lg drop-shadow-[0_0_4px_rgba(255,255,255,0.25)]">Voir plus</button> -->
        </div>
    </article>
</template>