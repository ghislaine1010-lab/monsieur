document.addEventListener("DOMContentLoaded", () => {
    // Afficher un message de bienvenue dans la console
    console.log("Bienvenue sur Monsieur Thé !");

    // Fonctionnalité de navigation fluide
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").replace(".html", "");
            const targetElement = document.querySelector(`#${targetId}`);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// Ajout d'une fonctionnalité pour changer dynamiquement la couleur du header au défilement
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#5aa461";
    } else {
        header.style.backgroundColor = "#7dbb73";
    }
});
