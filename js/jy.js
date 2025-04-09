document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        window.location.href = '#produits';
    });
});

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("active");
});
