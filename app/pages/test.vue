<script setup>
// import { onMounted, onUnmounted } from 'vue'

// // Variable globale pour stocker l'observateur de redimensionnement
// let resizeObserver;

// // Fonction qui met à jour une variable CSS personnalisée (--section-h)
// // pour chaque élément ayant la classe .stack-section
// const updateHeights = () => {
//     // Sélectionne toutes les sections concernées dans le DOM
//     const sections = document.querySelectorAll('.stack-section');

//     sections.forEach(section => {
//         // Définit une variable CSS contenant la hauteur actuelle de la section
//         // offsetHeight = hauteur visible (inclut padding + border)
//         section.style.setProperty('--section-h', `${section.offsetHeight}px`);
//     });
// };

// // Hook appelé lorsque le composant est monté dans le DOM
// onMounted(() => {
//     // Première mise à jour immédiate des hauteurs
//     updateHeights();

//     // Création d’un ResizeObserver :
//     // il détecte les changements de taille des éléments observés
//     resizeObserver = new ResizeObserver(() => {
//         // À chaque changement de taille → recalcul des hauteurs
//         updateHeights();
//     });
    
//     // On attache l’observateur à chaque section ciblée
//     document.querySelectorAll('.stack-section').forEach(s => {
//         resizeObserver.observe(s);
//     });
// });

// // Hook appelé lorsque le composant est démonté
// onUnmounted(() => {
//     // Nettoyage : on arrête l’observation pour éviter les fuites mémoire
//     if (resizeObserver) resizeObserver.disconnect();
// });

import { useSectionScript } from '~/composables/sectionScript'

useSectionScript()
</script>

<template>
    <main>
        <section class="stack-section" style="--z: 1">
            <article class="stack-panel" style="background-image: linear-gradient(180deg, #101010 0%, #2a2a2a 100%)">
                <h1>Section 1</h1>
                <p>Section courte: elle occupe un écran et laisse la suivante passer par dessus.</p>

                <div>
                    <p>Ligne 1: contenu de test codé en dur.</p>
                    <p>Ligne 2: contenu de test codé en dur.</p>
                    <p>Ligne 3: contenu de test codé en dur.</p>
                    <p>Ligne 4: contenu de test codé en dur.</p>
                </div>
            </article>
        </section>

        <section class="stack-section" style="--z: 2">
            <article class="stack-panel" style="background-image: linear-gradient(180deg, #10131a 0%, #202f45 100%)">
                <h1>Section 2</h1>
                <p>Section plus longue: le contenu continue de scroller avant de laisser entrer la suivante.</p>

                <div>
                    <p>Ligne 1: contenu de test codé en dur.</p>
                    <p>Ligne 2: contenu de test codé en dur.</p>
                    <p>Ligne 3: contenu de test codé en dur.</p>
                    <p>Ligne 4: contenu de test codé en dur.</p>
                    <p>Ligne 5: contenu de test codé en dur.</p>
                    <p>Ligne 6: contenu de test codé en dur.</p>
                    <p>Ligne 7: contenu de test codé en dur.</p>
                    <p>Ligne 8: contenu de test codé en dur.</p>
                    <p>Ligne 9: contenu de test codé en dur.</p>
                    <p>Ligne 10: contenu de test codé en dur.</p>
                    <p>Ligne 11: contenu de test codé en dur.</p>
                    <p>Ligne 12: contenu de test codé en dur.</p>
                    <p>Ligne 13: contenu de test codé en dur.</p>
                    <p>Ligne 14: contenu de test codé en dur.</p>
                    <p>Ligne 15: contenu de test codé en dur.</p>
                    <p>Ligne 16: contenu de test codé en dur.</p>
                    <p>Ligne 17: contenu de test codé en dur.</p>
                    <p>Ligne 18: contenu de test codé en dur.</p>
                    <p>Ligne 19: contenu de test codé en dur.</p>
                    <p>Ligne 20: contenu de test codé en dur.</p>
                    <p>Ligne 21: contenu de test codé en dur.</p>
                    <p>Ligne 22: contenu de test codé en dur.</p>
                    <p>Ligne 23: contenu de test codé en dur.</p>
                    <p>Ligne 24: contenu de test codé en dur.</p>
                    <p>Ligne 25: contenu de test codé en dur.</p>
                    <p>Ligne 26: contenu de test codé en dur.</p>
                    <p>Ligne 27: contenu de test codé en dur.</p>
                    <p>Ligne 28: contenu de test codé en dur.</p>
                    <p>Ligne 29: contenu de test codé en dur.</p>
                    <p>Ligne 30: contenu de test codé en dur.</p>
                    <p>Ligne 1: contenu de test codé en dur.</p>
                    <p>Ligne 2: contenu de test codé en dur.</p>
                    <p>Ligne 3: contenu de test codé en dur.</p>
                    <p>Ligne 4: contenu de test codé en dur.</p>
                    <p>Ligne 5: contenu de test codé en dur.</p>
                    <p>Ligne 6: contenu de test codé en dur.</p>
                    <p>Ligne 7: contenu de test codé en dur.</p>
                    <p>Ligne 8: contenu de test codé en dur.</p>
                    <p>Ligne 9: contenu de test codé en dur.</p>
                    <p>Ligne 10: contenu de test codé en dur.</p>
                    <p>Ligne 11: contenu de test codé en dur.</p>
                    <p>Ligne 12: contenu de test codé en dur.</p>
                    <p>Ligne 13: contenu de test codé en dur.</p>
                    <p>Ligne 14: contenu de test codé en dur.</p>
                    <p>Ligne 15: contenu de test codé en dur.</p>
                    <p>Ligne 16: contenu de test codé en dur.</p>
                    <p>Ligne 17: contenu de test codé en dur.</p>
                    <p>Ligne 18: contenu de test codé en dur.</p>
                    <p>Ligne 19: contenu de test codé en dur.</p>
                    <p>Ligne 20: contenu de test codé en dur.</p>
                    <p>Ligne 21: contenu de test codé en dur.</p>
                    <p>Ligne 22: contenu de test codé en dur.</p>
                    <p>Ligne 23: contenu de test codé en dur.</p>
                    <p>Ligne 24: contenu de test codé en dur.</p>
                    <p>Ligne 25: contenu de test codé en dur.</p>
                    <p>Ligne 26: contenu de test codé en dur.</p>
                    <p>Ligne 27: contenu de test codé en dur.</p>
                    <p>Ligne 28: contenu de test codé en dur.</p>
                    <p>Ligne 29: contenu de test codé en dur.</p>
                    <p>Ligne 30: contenu de test codé en dur.</p>
                    <p>Ligne 1: contenu de test codé en dur.</p>
                    <p>Ligne 2: contenu de test codé en dur.</p>
                    <p>Ligne 3: contenu de test codé en dur.</p>
                    <p>Ligne 4: contenu de test codé en dur.</p>
                    <p>Ligne 5: contenu de test codé en dur.</p>
                    <p>Ligne 6: contenu de test codé en dur.</p>
                    <p>Ligne 7: contenu de test codé en dur.</p>
                    <p>Ligne 8: contenu de test codé en dur.</p>
                    <p>Ligne 9: contenu de test codé en dur.</p>
                    <p>Ligne 10: contenu de test codé en dur.</p>
                    <p>Ligne 11: contenu de test codé en dur.</p>
                    <p>Ligne 12: contenu de test codé en dur.</p>
                    <p>Ligne 13: contenu de test codé en dur.</p>
                    <p>Ligne 14: contenu de test codé en dur.</p>
                    <p>Ligne 15: contenu de test codé en dur.</p>
                    <p>Ligne 16: contenu de test codé en dur.</p>
                    <p>Ligne 17: contenu de test codé en dur.</p>
                    <p>Ligne 18: contenu de test codé en dur.</p>
                    <p>Ligne 19: contenu de test codé en dur.</p>
                    <p>Ligne 20: contenu de test codé en dur.</p>
                    <p>Ligne 21: contenu de test codé en dur.</p>
                    <p>Ligne 22: contenu de test codé en dur.</p>
                    <p>Ligne 23: contenu de test codé en dur.</p>
                    <p>Ligne 24: contenu de test codé en dur.</p>
                    <p>Ligne 25: contenu de test codé en dur.</p>
                    <p>Ligne 26: contenu de test codé en dur.</p>
                    <p>Ligne 27: contenu de test codé en dur.</p>
                    <p>Ligne 28: contenu de test codé en dur.</p>
                    <p>Ligne 29: contenu de test codé en dur.</p>
                    <p>Ligne 30: contenu de test codé en dur.</p>
                </div>
            </article>
        </section>

        <section class="stack-section" style="--z: 3">
            <article class="stack-panel" style="background-image: linear-gradient(180deg, #161015 0%, #40263e 100%)">
                <h1>Section 3</h1>
                <p>Même comportement: lecture complète puis recouvrement progressif de la section suivante.</p>

                <div>
                    <p>Ligne 1: contenu de test codé en dur.</p>
                    <p>Ligne 2: contenu de test codé en dur.</p>
                    <p>Ligne 3: contenu de test codé en dur.</p>
                    <p>Ligne 4: contenu de test codé en dur.</p>
                    <p>Ligne 5: contenu de test codé en dur.</p>
                    <p>Ligne 6: contenu de test codé en dur.</p>
                    <p>Ligne 7: contenu de test codé en dur.</p>
                    <p>Ligne 8: contenu de test codé en dur.</p>
                    <p>Ligne 9: contenu de test codé en dur.</p>
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
.stack-root {
    background: #0d0d0d;
}
</style>