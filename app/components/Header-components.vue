<script setup lang="ts">
import LBicon from './icones/LBicon.vue';
</script>

<template>
    <header class="flex items-center justify-between px-12 h-40 fixed top-0 w-full bg-linear-to-b from-[#0D0D0D] via-[#0D0D0DCC] via-40% to-[#0D0D0D00] z-50">
        <LBicon class="h-24 w-24 opacity-70"/>
        <nav class="opacity-70">
            <ul class="flex gap-24 text-4xl font-outfit uppercase">
                <li><a href="#">Projets</a></li>
                <li><a href="#">Book</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>