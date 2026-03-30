import { onMounted, onUnmounted } from 'vue'

export const useSectionScript = () => {
    // Variable globale pour stocker l'observateur de redimensionnement
    let resizeObserver: ResizeObserver | undefined;

    // Fonction qui met à jour une variable CSS personnalisée (--section-h)
    // pour chaque élément ayant la classe .stack-section
    const updateHeights = () => {
        // Sélectionne toutes les sections concernées dans le DOM
        const sections = document.querySelectorAll('.stack-section');

        sections.forEach(section => {
            // Définit une variable CSS contenant la hauteur actuelle de la section
            // offsetHeight = hauteur visible (inclut padding + border)
            (section as HTMLElement).style.setProperty('--section-h', `${(section as HTMLElement).offsetHeight}px`);
        });
    };

    // Hook appelé lorsque le composant est monté dans le DOM
    onMounted(() => {
        // Première mise à jour immédiate des hauteurs
        updateHeights();

        // Création d’un ResizeObserver :
        // il détecte les changements de taille des éléments observés
        resizeObserver = new ResizeObserver(() => {
            // À chaque changement de taille → recalcul des hauteurs
            updateHeights();
        });

        // On attache l’observateur à chaque section ciblée
        document.querySelectorAll('.stack-section').forEach(s => {
            resizeObserver!.observe(s);
        });
    });

    // Hook appelé lorsque le composant est démonté
    onUnmounted(() => {
        // Nettoyage : on arrête l’observation pour éviter les fuites mémoire
        if (resizeObserver) resizeObserver.disconnect();
    });
}