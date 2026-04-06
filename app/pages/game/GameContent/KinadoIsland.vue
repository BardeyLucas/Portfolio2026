<script setup lang="ts">
import bgGameDesign from '~/assets/images/KinadoIsland_Ss_Door.png'
import type { Game } from '~/types/api/game';

const props = defineProps<{
    game: Game
}>()
</script>

<template>
    <div>
    <SectionsOneTitle :src="bgGameDesign" title="Game Design" />
    <SectionsBook />
    <SectionsInfosTemporaire section-title="Section Game design" sous-section-title="Mécaniques de jeu (base)" color1="--color-Medium" color2="--color-Dark" color3="--color-Medium" :game="props.game" categorie="base" :z-index="6"/>
    <SectionsInfosTemporaire section-title="Section Game design" sous-section-title="Mécaniques de jeu (avancé)" line1="Cette rubrique n’est utile que si vous souhaitez en savoir plus" line2="sur les fonctionnalités développer dans le jeu" color1="--color-Light" color2="--color-Medium" color3="--color-Darker"  :game="props.game" categorie="advanced" :z-index="7"/>
    <SectionsPresentationInteractive13 section-title="Section Game design" sous-section-title="Mapping" :game="props.game"/>
    <SectionsTwoScreenNavigatorAndInformator :subject="'inspirations'" :section-number="4" :sous-section="true" section-title="Section Game design" sous-section-title="Interface de jeu" color1="--color-Light" color2="--color-Medium" :game="props.game"/>
    <SectionsTwoScreenNavigatorAndInformator :subject="'inspirations'" :section-number="9" :sous-section="false" section-title="Inspirations" color1="--color-Darker" :game="props.game"/>
    <SectionsListe :subject="'ajouts'" section-title="Ajouts à venir" color1="--color-Dark" :game="props.game"/>
    <SectionsConclusion color1="--color-Light" color2="--color-Medium" :game="props.game"/>
    </div>   
</template>