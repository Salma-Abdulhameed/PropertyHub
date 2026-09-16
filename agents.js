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

// Agent Search

const searchInput = document.getElementById("agentSearch");
const agentItems = document.querySelectorAll(".agent-item");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        agentItems.forEach(item => {
            const text = item.innerText.toLowerCase();

            item.style.display = text.includes(value) ? "" : "none";
        });
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