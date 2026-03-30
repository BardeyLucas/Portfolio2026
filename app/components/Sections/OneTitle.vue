<script setup lang="ts">

defineProps<{
  src: string
  title: string
}>()

</script>

<template>
    <section class="bg-cover bg-center stack-section" :style="`--z: 4; background-image: url(${src});`">
        <article class="stack-panel bg-[#222222E6] flex items-center justify-center">
            <h2 class="text-7xl font-outfit text-white">{{ title }}</h2>
        </article>
    </section>
</template>