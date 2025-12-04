// HAMBURGER MENU LOGIC

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Animate hamburger icon
    hamburger.classList.toggle("active");
});
