// ///// Navbar Start /////

// 1. Scroll Effect (Navbar compact on scroll)
const navbar = document.querySelector(".custom-navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 2. Dynamic Active Link Highlight Based on Current Page URL
const currentUrl = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  // Agar URL page link se match kare to active class add karein
  if (link.getAttribute("href") && currentUrl.includes(link.getAttribute("href"))) {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  }
});

// 3. Search Alert
const searchBtn = document.querySelector(".icon-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    alert("Search Feature Coming Soon 🔍");
  });
}

// 4. Sell Button Hover Effect (Isay CSS :hover bhi handle karta hai, par JS safety ke liye)
const sellBtn = document.querySelector(".sell-btn");
if (sellBtn) {
  sellBtn.addEventListener("mouseenter", function () {
    sellBtn.style.transform = "scale(1.05)";
  });
  sellBtn.addEventListener("mouseleave", function () {
    sellBtn.style.transform = "scale(1)";
  });
}

// 5. Desktop Hover Dropdown Menu
const dropdown = document.querySelector(".dropdown");
if (dropdown && window.innerWidth > 992) {
  dropdown.addEventListener("mouseenter", function () {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    if (toggleBtn) {
      bootstrap.Dropdown.getOrCreateInstance(toggleBtn).show();
    }
  });
  dropdown.addEventListener("mouseleave", function () {
    const toggleBtn = dropdown.querySelector(".dropdown-toggle");
    if (toggleBtn) {
      bootstrap.Dropdown.getOrCreateInstance(toggleBtn).hide();
    }
  });
}

// ///// Navbar End /////

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Page reload hone se rokey ga
    alert("Thank you! Your message has been sent successfully. 📩");
    contactForm.reset(); // Input fields clear kar dega
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