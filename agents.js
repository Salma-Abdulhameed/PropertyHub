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

// ==========================================
// FLYING PLANE NEWSLETTER SYSTEM
// ==========================================
(function() {
  const form = document.getElementById("creativeNewsletterForm");
  const planeIcon = document.getElementById("planeIcon");
  
  if (form && planeIcon) {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Default Page refresh rokhne ke liye
      
      const emailField = document.getElementById("newsletterEmailField");
      const submitBtn = form.querySelector(".subscribe-action-btn");
      const btnText = submitBtn.querySelector(".btn-text");
      const spinner = submitBtn.querySelector(".spinner-border");
      
      if (emailField.value.trim() !== "") {
        // Step 1: Trigger paper plane flying animation
        planeIcon.classList.add("fly-away");
        
        // Step 2: Button loading state change
        btnText.style.opacity = "0.5";
        spinner.classList.remove("d-none");
        submitBtn.disabled = true;
        
        // Step 3: Animation complete hone par success confirm display karna (1 sec delay)
        setTimeout(() => {
          spinner.classList.add("d-none");
          btnText.style.opacity = "1";
          btnText.innerHTML = '<i class="bi bi-shield-fill-check"></i> Subscribed!';
          submitBtn.style.background.setProperty("background", "#2ec4b6", "important"); // Neon Success Green color
          submitBtn.style.boxShadow = "0 8px 20px rgba(46, 196, 182, 0.35)";
          
          // Form resets after 3 seconds
          setTimeout(() => {
            planeIcon.classList.remove("fly-away");
            btnText.innerHTML = "Subscribe";
            submitBtn.style.background = "#0d6efd !important";
            submitBtn.style.boxShadow = "";
            submitBtn.disabled = false;
            emailField.value = "";
          }, 3000);
          
        }, 1100);
      }
    });
  }
})();


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