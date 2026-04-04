<script setup lang="ts">
import type { Game } from '~/types/api/game';

const props = defineProps<{
    sectionNumber: number
    game: Game
}>()
</script>
<template>
    <section v-if="sectionNumber == 4" class="w-full h-full grid grid-cols-2 grid-rows-2">
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
    </section>
    <section v-else class="w-full h-full grid grid-cols-3 grid-rows-3">
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
        <div class="col-span-1 row-span-1 bg-linear-to-br from-[#0D0D0D] to-[#5A5A5A]"></div>
    </section>
</template>