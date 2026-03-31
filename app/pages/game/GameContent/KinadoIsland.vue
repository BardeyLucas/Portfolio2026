<script setup lang="ts">
import bgGameDesign from '~/assets/images/KinadoIsland_Ss_Door.png'
</script>

<template>
    <SectionsOneTitle :src="bgGameDesign" title="Game Design" />
    <SectionsBook />
    <SectionsInfosTemporaire sectionTitle="Section Game design" sousSectionTitle="Mécaniques de jeu (base)" color1="--color-Medium" color2="--color-Dark" :zIndex="6"/>
    <SectionsInfosTemporaire sectionTitle="Section Game design" sousSectionTitle="Mécaniques de jeu (avancé)" Line1="Cette rubrique n’est utile que si vous souhaitez en savoir plus" Line2="sur les fonctionnalités développer dans le jeu" color1="--color-Light" color2="--color-Medium" :zIndex="7"/>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 8">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Light)] stack-section" style="--z: 9">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Darker)] stack-section" style="--z: 10">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Dark)] stack-section" style="--z: 11">
        <article class="stack-panel">
        </article>
    </section>
    <section class="bg-[var(--color-Light)] stack-section" style="--z: 12">
        <article class="stack-panel">
        </article>
    </section>
</template>