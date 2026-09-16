// ==========================================
// ACTIVE NAVBAR LINK
// ==========================================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (href && href !== "#") {

        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    }
});


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (navbar) {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

});

// navbar end ////

// View Details buttons
const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Project details will be available soon.");
    });
});

// Simple scroll animation
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", function () {
    cards.forEach(function (card) {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});