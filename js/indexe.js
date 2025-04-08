document.addEventListener("DOMContentLoaded", function() {
    function handleButtons() {
        // Créer un tableau d'objets pour centraliser les informations des boutons
        const buttonsInfo = [
            { id: "sub1", message: "Vous avez commandé un milkshake à la mangue" },
            { id: "sub2", message: "Vous avez commandé un milkshake à la fraise" },
            { id: "sub3", message: "Vous avez commandé un milkshake au myrtille" },
            { id: "sub4", message: "Vous avez commandé un thé au lait chocolaté" },
            { id: "sub5", message: "Vous avez commandé un thé au lait chocolaté" },
            { id: "sub6", message: "Vous avez commandé un jus d'orange" },
            { id: "sub7", message: "Vous avez commandé un jus au citron" },
            { id: "sub8", message: "Vous avez commandé une glace au chocolat" },
            { id: "sub9", message: "Vous avez commandé une glace au chocolat" },
            { id: "su1", message: "Vous avez annulé la commande du milkshake à la mangue" },
            { id: "su2", message: "Vous avez annulé la commande du milkshake à la fraise" },
            { id: "su3", message: "Vous avez annulé la commande du milkshake au myrtille" },
            { id: "su4", message: "Vous avez annulé la commande du thé au lait chocolaté" },
            { id: "su5", message: "Vous avez annulé la commande du thé au lait chocolaté" },
            { id: "su6", message: "Vous avez annulé la commande du jus d'orange" },
            { id: "su7", message: "Vous avez annulé la commande du jus de citron" },
            { id: "su8", message: "Vous avez annulé la commande de la glace au chocolat" },
            { id: "su9", message: "Vous avez annulé la commande de la glace au chocolat" }
        ];

        // Ajouter un gestionnaire d'événements à chaque bouton
        buttonsInfo.forEach(buttonInfo => {
            const button = document.getElementById(buttonInfo.id);
            if (button) {
                button.addEventListener("click", () => {
                    alert(buttonInfo.message);
                });
            }
        });
    }

    handleButtons();
});
