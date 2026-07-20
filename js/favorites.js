///// Nvbar Strat ////
const navbar = document.querySelector(".custom-navbar");
window.addEventListener("scroll", function () {
if (window.scrollY > 50) {
navbar.classList.add("scrolled");
}
else {
navbar.classList.remove("scrolled");
}
});


const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
link.addEventListener("click", function () {
navLinks.forEach(item => {
item.classList.remove("active");
});
this.classList.add("active");
});
});

const searchBtn = document.querySelector(".icon-btn");
searchBtn.addEventListener("click", function () {
alert("Search Feature Coming Soon 🔍");
});


const sellBtn = document.querySelector(".sell-btn");
sellBtn.addEventListener("mouseenter", function () {
sellBtn.style.transform = "scale(1.05)";
});
sellBtn.addEventListener("mouseleave", function () {
sellBtn.style.transform = "scale(1)";
});


const dropdown = document.querySelector(".dropdown");
if (window.innerWidth > 992) {
dropdown.addEventListener("mouseenter", function () {
bootstrap.Dropdown.getOrCreateInstance(
dropdown.querySelector(".dropdown-toggle")
).show();
});
dropdown.addEventListener("mouseleave", function () {
bootstrap.Dropdown.getOrCreateInstance(
dropdown.querySelector(".dropdown-toggle")
).hide();
});
}
// //// Navbar End /////