// Portfolio startup message
console.log("Welcome to Nithishkumar's Portfolio!");
console.log("Python Web Developer | Portfolio 2026");

// Get the current year
const currentYear = new Date().getFullYear();

console.log("Current year:", currentYear);

// Scroll reveal effect
const sections = document.querySelectorAll("section:not(.hero)");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});