document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner les éléments FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    // Ajouter un événement pour chaque élément
    faqItems.forEach(item => {
        const question = item.querySelector("h3");

        question.addEventListener("click", () => {
            // Basculer l'état ouvert/fermé
            item.classList.toggle("open");

            const answer = item.querySelector("p");
            if (item.classList.contains("open")) {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
});
