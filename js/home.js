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


document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Carousel Auto-play aur Interval settings (Optional)
  const heroCarouselElement = document.querySelector("#heroCarousel");
  if (heroCarouselElement) {
    const carouselInstance = new bootstrap.Carousel(heroCarouselElement, {
      interval: 2000, // Har 4 seconds baad slide change hogi
      wrap: true,      // Slides rotate hoti rahengi end hone par bhi
      keyboard: true   // Keyboard arrows se control kiya ja sakega
    });
  }
 });

document.addEventListener("DOMContentLoaded", function () {
  const heroCarouselElement = document.querySelector("#heroCarousel");
  if (heroCarouselElement) {
    new bootstrap.Carousel(heroCarouselElement, {
      interval: 2000, // Har 1.5 seconds mein automatic slide badlegi
      wrap: true,
      keyboard: true
    });
  }
});

// 2. Search Form Submission Handling
const searchForm = document.querySelector(".search-filter-form"); // Form class matching
const searchBarBox = document.querySelector(".search-bar");

if (searchForm && searchBarBox) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Default reload ko rokne ke liye

    // Saare select fields ko unki classes se target karna (Nth-of-type ka issue solve karne ke liye)
    const selectElements = this.querySelectorAll(".filter-select");
    const locationSelect = selectElements[0];
    const typeSelect = selectElements[1];
    const priceSelect = selectElements[2];

    const location = locationSelect ? locationSelect.value : "Select Location";
    const type = typeSelect ? typeSelect.value : "Select Type";
    const price = priceSelect ? priceSelect.value : "Select Price";

    // Validation check: Agar user ne koi option select nahi kiya
    if (location === "Select Location" || type === "Select Type" || price === "Select Price") {
      alert("Please select all options to search the best properties.");
      
      // Agar validation fail ho jaye, to purana border effect remove kar dein (safety ke liye)
      searchBarBox.classList.remove("form-submitted");
      return;
    }

    // --- SUCCESS: Agar saari fields select ho chuki hain ---

    // 1. Pure outer box par 'form-submitted' class add karein (Dark Blue Border lock karne ke liye)
    searchBarBox.classList.add("form-submitted");

    // 2. Saare select elements aur unke groups ko force-filled (dark blue) state mein le jayein
    selectElements.forEach((select) => {
      select.classList.add("filled");
      const filterGroup = select.closest(".filter-group");
      if (filterGroup) {
        filterGroup.classList.add("filled");
      }
    });

    // Console aur Alert mein show karwana
    console.log(`Searching for: ${type} in ${location} within budget of ${price}`);
    alert(`Searching for: \n📍 Location: ${location} \n🏠 Type: ${type} \n💰 Price: ${price}`);
  });
}


// ==========================================
// FEATURED PROPERTIES - INTERACTIVE BEHAVIORS
// ==========================================
(function() {
  // 1. Wishlist Pop Animation System
  const wishlistButtons = document.querySelectorAll(".wishlist-btn");
  
  wishlistButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("active");
      
      // Micro-bounce transition on click
      this.style.transform = "scale(0.8)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // 2. Smooth One-by-One Staggered Entry on Scroll
  const cards = document.querySelectorAll(".property-card");
  
  if (cards.length > 0) {
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      card.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
    });

    const observerOptions = {
      root: null,
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 100); // Har card 100ms ke gap se load hoga
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const targetSection = document.querySelector(".featured-properties");
    if (targetSection) {
      observer.observe(targetSection);
    }
  }
})();



// ==========================================
// STATS COUNTER - SCROLL ANIMATION
// ==========================================
(function() {
  const statsSection = document.querySelector(".stats-section");
  const statNumbers = document.querySelectorAll(".stat-number");
  
  if (statsSection && statNumbers.length > 0) {
    let animated = false;

    const startCounter = () => {
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target"), 10);
        let count = 0;
        const speed = target / 50; // Transition speed controls
        
        const updateCount = () => {
          count += speed;
          if (count < target) {
            stat.innerText = Math.floor(count) + "+";
            setTimeout(updateCount, 25);
          } else {
            stat.innerText = target + "+";
          }
        };
        updateCount();
      });
    };

    // Scroll trigger checker
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          startCounter();
          animated = true; // Taake animation sirf ek baar chale scroll par
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }
})();



// ==========================================
// FEATURE CARDS & TESTIMONIALS ENTRY
// ==========================================
(function() {
  const featureCards = document.querySelectorAll(".feature-card");
  const testimonialCard = document.querySelector(".testimonial-card");

  if (featureCards.length > 0 && testimonialCard) {
    // Initial states
    featureCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)";
    });

    testimonialCard.style.opacity = "0";
    testimonialCard.style.transform = "translateX(40px)";
    testimonialCard.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";

    const infoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reveal feature cards one by one
          featureCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 120);
          });

          // Reveal testimonial card slightly after
          setTimeout(() => {
            testimonialCard.style.opacity = "1";
            testimonialCard.style.transform = "translateX(0)";
          }, 300);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const parentSection = document.querySelector(".info-testimonials-section");
    if (parentSection) {
      infoObserver.observe(parentSection);
    }
  }
})();


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