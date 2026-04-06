<script setup lang="ts">
import LBicon from './icones/LBicon.vue';
</script>

<template>
    <header class="flex items-center justify-between px-12 h-40 fixed top-0 w-full bg-linear-to-b from-[#0D0D0D] via-[#0D0D0DCC] via-40% to-[#0D0D0D00] z-[1000]">
        <RouterLink class="h-24 w-24" to="/">
            <LBicon class="h-full w-full opacity-70"/>
        </RouterLink>
        <nav class="opacity-70">
            <ul class="flex gap-24 text-4xl font-outfit uppercase">
                <li><RouterLink to="/projets">Projets</RouterLink></li>
                <li><RouterLink to="/book">Book</RouterLink></li>
                <li><RouterLink to="/a-propos">A propos</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>