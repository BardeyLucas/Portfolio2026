<script setup lang="ts">
import bgGameDesign from '~/assets/images/KinadoIsland_Ss_Door.png'
import type { Game } from '~/types/api/game';

const props = defineProps<{
    game: Game
}>()
</script>

<template>
    <SectionsOneTitle :src="bgGameDesign" title="Game Design" />
    <SectionsBook />
    <SectionsInfosTemporaire sectionTitle="Section Game design" sousSectionTitle="Mécaniques de jeu (base)" color1="--color-Medium" color2="--color-Dark" color3="--color-Medium" :game="props.game" categorie="base" :zIndex="6"/>
    <SectionsInfosTemporaire sectionTitle="Section Game design" sousSectionTitle="Mécaniques de jeu (avancé)" Line1="Cette rubrique n’est utile que si vous souhaitez en savoir plus" Line2="sur les fonctionnalités développer dans le jeu" color1="--color-Light" color2="--color-Medium" color3="--color-Darker"  :game="props.game" categorie="advanced" :zIndex="7"/>
    <SectionsPresentationInteractive13 sectionTitle="Section Game design" sousSectionTitle="Mapping" :game="props.game"/>
    <SectionsTwoScreenNavigatorAndInformator :subject="'inspirations'" :sectionNumber="4" :sousSection="true" sectionTitle="Section Game design" sousSectionTitle="Interface de jeu" color1="--color-Light" color2="--color-Medium" :game="props.game"/>
    <SectionsTwoScreenNavigatorAndInformator :subject="'inspirations'" :sectionNumber="9" :sousSection="false" sectionTitle="Inspirations" color1="--color-Darker" :game="props.game"/>
    <SectionsListe :subject="'ajouts'" sectionTitle="Ajouts à venir" color1="--color-Dark" :game="props.game"/>
    <SectionsConclusion color1="--color-Light" color2="--color-Medium" :game="props.game"/>
</template>