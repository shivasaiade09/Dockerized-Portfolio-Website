// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Sticky Navbar

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }else{

        navbar.style.background = "rgba(15,23,42,.8)";
        navbar.style.boxShadow = "none";

    }

});
