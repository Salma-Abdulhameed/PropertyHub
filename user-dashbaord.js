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

// User Dashboard Chart

const userChart = document.getElementById("userActivityChart");

if (userChart) {

    new Chart(userChart, {

        type: "bar",

        data: {
            labels: [
                "Viewed",
                "Favorites",
                "Inquiries",
                "Appointments"
            ],

            datasets: [{
                label: "Activity",
                data: [12, 8, 5, 3],
                borderWidth: 1
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
                    },

                    grid: {
                        display: false
                    }
                },

                y: {
                    beginAtZero: true,

                    ticks: {
                        color: "#9fb0c8"
                    },

                    grid: {
                        color: "#263b5c"
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


// ==========================================
// FOOTER BACK TO TOP SMOOTH SCROLL SYSTEM
// ==========================================
(function() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function() {
      // Safely triggers modern smooth page scrolling up to index zero layout position
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();
