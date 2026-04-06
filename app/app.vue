<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <HeaderComponents />
  <NuxtPage class="font-[var(Open-Sans)]"/>
  <FooterComponents v-if="route.name !== 'game-slug'" />
</template>
<style>
  html{
    background-color: var(--color-Darker);
    color: var(--color-White);
    }
</style>