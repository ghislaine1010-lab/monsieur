// Fonction pour ajuster le comportement selon la taille de l'écran
function handleResponsiveElements() {
    const faqItems = document.querySelectorAll('.faq-item');
    const screenWidth = window.innerWidth;

    // Comportement pour les petits écrans (mobile)
    if (screenWidth < 768) {
        faqItems.forEach(item => {
            // Collapse FAQ par défaut
            const content = item.querySelector('p');
            content.style.display = 'none';

            // Activation/désactivation au clic
            item.addEventListener('click', () => {
                const isVisible = content.style.display === 'block';
                content.style.display = isVisible ? 'none' : 'block';
            });
        });
    } else {
        // Comportement pour les écrans larges (desktop)
        faqItems.forEach(item => {
            const content = item.querySelector('p');
            content.style.display = 'block'; // Toujours visible sur écrans larges
            item.removeEventListener('click', null); // Supprimer le gestionnaire d'événements
        });
    }
}

// Ajustement au redimensionnement de la fenêtre
window.addEventListener('resize', handleResponsiveElements);

// Initialisation au chargement
window.addEventListener('DOMContentLoaded', handleResponsiveElements);

