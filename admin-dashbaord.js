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

// Property Listings Chart

const propertyChart = document.getElementById("propertyChart");

if (propertyChart) {

    new Chart(propertyChart, {
        type: "line",

        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

            datasets: [{
                label: "Properties Listed",
                data: [8, 12, 10, 18, 15, 24],
                borderWidth: 3,
                tension: 0.4
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    labels: {
                        color: "#ffffff"
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: "#9fb0c8"
                    }
                },

                y: {
                    beginAtZero: true,

                    ticks: {
                        color: "#9fb0c8"
                    }
                }
            }
        }
    });
}


// User Overview Chart

const userOverviewChart =
    document.getElementById("userOverviewChart");

if (userOverviewChart) {

    new Chart(userOverviewChart, {
        type: "doughnut",

        data: {
            labels: ["Users", "Agents", "Admins"],

            datasets: [{
                data: [245, 36, 3],
                borderWidth: 0
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    position: "bottom",

                    labels: {
                        color: "#ffffff"
                    }
                }
            }
        }
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