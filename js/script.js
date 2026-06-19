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
function showSection(sectionId) {
    // 1. Hide all elements with the class 'content-section'
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove the glow highlighting from all menu buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Make the clicked section visible
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // 4. Highlight the currently selected navigation button
    const clickedButton = Array.from(buttons).find(btn => 
        btn.getAttribute('onclick').includes(sectionId)
    );
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// Simple typing effect
const text = "DevOps Engineer | Cloud Enthusiast | Kubernetes Learner";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();
