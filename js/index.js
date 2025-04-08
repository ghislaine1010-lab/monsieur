document.addEventListener("DOMContentLoaded", () => {
    const mapCanvas = document.getElementById("map-canvas");

    // Vérifie que le conteneur de la carte existe
    if (mapCanvas) {
        const mapOptions = {
            center: { lat: 6.128601, lng: 1.221639 }, // Coordonnées de "Monsieur Thé"
            zoom: 15, // Zoom par défaut
            mapTypeControl: false, // Désactive le contrôle des types de cartes pour simplifier
            streetViewControl: false, // Désactive le contrôle "Street View" pour un affichage épuré
            fullscreenControl: true // Garde l'option plein écran
        };

        // Initialise la carte
        const map = new google.maps.Map(mapCanvas, mapOptions);

        // Ajout d'un marqueur sur la carte
        new google.maps.Marker({
            position: { lat: 6.128601, lng: 1.221639 },
            map: map,
            title: "Monsieur Thé"
        });

        // Rendre la carte responsive
        window.addEventListener("resize", () => {
            // Recentre la carte après un redimensionnement
            const center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    } else {
        console.error("Le conteneur de la carte (map-canvas) est introuvable.");
    }
});
