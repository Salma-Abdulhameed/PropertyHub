// Navbar Scroll
const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {
    if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
});


// Active Nav Link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// Search Button
const searchBtn = document.querySelector(".icon-btn");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        alert("Search Feature Coming Soon 🔍");
    });
}


// Properties Dropdown
const dropdown = document.querySelector(".dropdown");

if (dropdown && window.innerWidth > 992) {

    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

    dropdown.addEventListener("mouseenter", () => {
        bootstrap.Dropdown
            .getOrCreateInstance(dropdownToggle)
            .show();
    });

    dropdown.addEventListener("mouseleave", () => {
        bootstrap.Dropdown
            .getOrCreateInstance(dropdownToggle)
            .hide();
    });
}

// Image Preview
const imageInput = document.getElementById("propertyImage");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];

    if (file) {
        imagePreview.src = URL.createObjectURL(file);
        imagePreview.style.display = "block";
    }
});


// Form Submit
const propertyForm = document.getElementById("propertyForm");

propertyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Property details submitted successfully!");

    propertyForm.reset();
    imagePreview.src = "";
    imagePreview.style.display = "none";
});


// GSAP Animation
gsap.from(".hero-content", {
    opacity: 0,
    y: 30,
    duration: 1
});

gsap.from(".section-heading", {
    opacity: 0,
    y: 30,
    duration: 0.8
});

gsap.from(".form-card", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".property-section",
        start: "top 80%"
    }
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