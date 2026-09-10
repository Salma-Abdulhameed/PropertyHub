///// Nvbar Strat ////

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
// //// Navbar End /////



// Favorite Button

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(button => {

    button.addEventListener("click", () => {
        button.classList.toggle("saved");
    });

});


// Logout Button

const logoutBtn = document.querySelector("#logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {
        alert("Logout will be connected with Firebase.");
    });

}



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
