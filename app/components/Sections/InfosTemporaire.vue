<script lang="ts" setup>
    defineProps<{
        sectionTitle: string
        sousSectionTitle: string
        color1: string
        color2: string
        zIndex : number
    }>()
</script>

<template>
    <section class="stack-section" :style="{ '--z': zIndex, 'background-color': `var(${color1})` }">
        <article class="stack-panel px-12 pt-36 pb-12 flex flex-col relative h-auto">
            <h2 class="text-5xl mb-12">{{ sectionTitle }}</h2>
            <section class="w-full flex-1 flex rounded-3xl p-10 flex flex-col gap-10" :style="{ 'background-color': `var(${color2})` }">
                <h3 class="text-4xl">{{ sousSectionTitle }}</h3>
            </section>
        </article>
    </section>
</template>