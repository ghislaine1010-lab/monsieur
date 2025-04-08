document.addEventListener("DOMContentLoaded", () => {
    const mapCanvas = document.getElementById("map-canvas");

    const mapOptions = {
        center: { lat: 6.128601, lng: 1.221639 }, //  les coordonnées de monsieur the.
        zoom: 15
    };

    const map = new google.maps.Map(mapCanvas, mapOptions);
});
