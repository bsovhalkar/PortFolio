
document.addEventListener("DOMContentLoaded", () => {
    const themeBtn = document.getElementById("theme-toggle");

    // APPLY SAVED THEME ON PAGE LOAD
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (themeBtn) themeBtn.textContent = "☀️ Light";
    }

    // TOGGLE THEME
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                themeBtn.textContent = "☀️ Light";
            } else {
                localStorage.setItem("theme", "light");
                themeBtn.textContent = "🌙 Dark";
            }
        });
    }
});


// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile navbar toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
