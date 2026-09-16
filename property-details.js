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

// Property Search

const searchInput = document.getElementById("propertySearch");
const filter = document.getElementById("propertyFilter");
const properties = document.querySelectorAll(".property-item");

function filterProperties() {

    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filter.value;

    properties.forEach(property => {

        const text = property.innerText.toLowerCase();
        const type = property.dataset.type;

        if (
            text.includes(searchValue) &&
            (filterValue === "all" || type === filterValue)
        ) {
            property.style.display = "";
        } else {
            property.style.display = "none";
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("input", filterProperties);
}

if (filter) {
    filter.addEventListener("change", filterProperties);
}


// Simple GSAP Animation

gsap.from(".property-card", {
    y: 25,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
});

// Back To Top

const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {

    backToTopBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// Newsletter

const newsletter = document.querySelector(".footer-mini-newsletter");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        newsletter.reset();

    });

}


















