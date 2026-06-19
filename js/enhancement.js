// ===== Smooth scroll highlight =====
document.addEventListener("DOMContentLoaded", () => {
    console.log("Enhancements Loaded 🚀");
});

// ===== Fade-in sections on scroll =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

// ===== Fix long skill lists (desktop UI improvement) =====
document.querySelectorAll(".skills li").forEach(el => {
    el.classList.add("skill");
});
