// ==========================================
// NAVBAR START
// ==========================================

// Navbar Scroll

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (navbar) {
        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );
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

    const dropdownToggle =
        dropdown.querySelector(".dropdown-toggle");

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

// ==========================================
// NAVBAR END
// ==========================================



// ==========================================
// HERO START
// ==========================================

// Hero Animation

if (typeof gsap !== "undefined") {

    gsap.from(".hero-content", {
        opacity: 0,
        y: 30,
        duration: 1
    });

}

// ==========================================
// HERO END
// ==========================================



// ==========================================
// PROPERTY FORM START
// ==========================================

// Image Preview

const imageInput =
    document.getElementById("propertyImage");

const imagePreview =
    document.getElementById("imagePreview");

if (imageInput && imagePreview) {

    imageInput.addEventListener("change", () => {

        const file = imageInput.files[0];

        if (file) {

            imagePreview.src =
                URL.createObjectURL(file);

            imagePreview.style.display = "block";

        }

    });

}


// Form Submit

const propertyForm =
    document.getElementById("propertyForm");

if (propertyForm) {

    propertyForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Property details submitted successfully!");

        propertyForm.reset();

        if (imagePreview) {

            imagePreview.src = "";
            imagePreview.style.display = "none";

        }

    });

}

// ==========================================
// PROPERTY FORM END
// ==========================================



// ==========================================
// SCROLL ANIMATIONS START
// ==========================================

if (typeof gsap !== "undefined") {

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

}

// ==========================================
// SCROLL ANIMATIONS END
// ==========================================



// ==========================================
// FOOTER START
// ==========================================

// Back To Top

const backToTopBtn =
    document.getElementById("backToTopBtn");

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