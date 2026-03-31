<script lang="ts" setup>
    const props = defineProps<{
        sectionTitle: string
        sousSectionTitle: string
        Line1?: string
        Line2?: string
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
                <div class=" flex flex-col gap-2">
                    <h3 class="text-4xl mb-2">{{ sousSectionTitle }}</h3>
                    <p class="text-lg" v-if="Line1">
                        {{ Line1 }}
                        <span v-if="Line2"><br/>
                        {{ Line2 }}
                        </span>
                    </p>
                </div>
                <section class="w-full h-full flex gap-12">
                    <section class="h-full flex-1 flex flex-col gap-10">
                        
                    </section>
                    <section class="h-full flex-1 flex flex-col gap-10">

                    </section>
                </section>
            </section>
        </article>
    </section>
</template>