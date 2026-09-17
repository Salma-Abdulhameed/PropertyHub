const buyImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600'
];

const rentImages = [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600',
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600',
  'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600'
];


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderBuyGrid();
  renderRentGrid();
  renderFavGrid();
});


// ==========================================
// NAVBAR
// ==========================================

const navbar = document.querySelector(".custom-navbar");

if (navbar) {
  window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });
}


// Navbar Links

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

  link.addEventListener("click", function () {

    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

  });

});


// Search Button

const searchBtn = document.querySelector(".icon-btn");

if (searchBtn) {

  searchBtn.addEventListener("click", function () {
    alert("Search Feature Coming Soon 🔍");
  });

}


// Sell Button

const sellBtn = document.querySelector(".sell-btn");

if (sellBtn) {

  sellBtn.addEventListener("mouseenter", function () {
    sellBtn.style.transform = "scale(1.05)";
  });

  sellBtn.addEventListener("mouseleave", function () {
    sellBtn.style.transform = "scale(1)";
  });

}


// Properties Dropdown

const dropdown = document.querySelector(".dropdown");

if (dropdown && window.innerWidth > 992) {

  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

  if (dropdownToggle && typeof bootstrap !== "undefined") {

    dropdown.addEventListener("mouseenter", function () {

      bootstrap.Dropdown
        .getOrCreateInstance(dropdownToggle)
        .show();

    });

    dropdown.addEventListener("mouseleave", function () {

      bootstrap.Dropdown
        .getOrCreateInstance(dropdownToggle)
        .hide();

    });

  }

}


// ==========================================
// BUY PAGE
// ==========================================

function renderBuyGrid() {

  const buyGrid = document.getElementById('buyGrid');

  if (!buyGrid) return;

  let html = '';

  for (let i = 0; i < 9; i++) {

    html += `
      <div class="col-md-4">

        <div class="card property-card h-100">

          <div class="img-wrapper">

            <span class="badge-type">
              For Sale
            </span>

            <img src="${buyImages[i]}" alt="Property">

            <button 
              class="fav-btn active" 
              onclick="toggleFav(this)"
            >
              <i class="fa-solid fa-heart"></i>
            </button>

          </div>

          <div class="card-body p-4">

            <div class="price-tag mb-1">
              PKR ${(1.8 + i * 0.4).toFixed(1)} Crore
            </div>

            <h5 class="card-title text-dark fw-bold">
              Luxury Villa - Unit ${i + 1}
            </h5>

            <p class="text-muted small mb-2">
              <i class="fa-solid fa-location-dot text-danger me-1"></i>
              DHA Lahore
            </p>

            <a 
              href="property-detail.html" 
              class="btn btn-outline-primary w-100 rounded-pill mt-2 fw-semibold"
            >
              View Details
            </a>

          </div>

        </div>

      </div>
    `;
  }

  buyGrid.innerHTML = html;
}


// ==========================================
// RENT PAGE
// ==========================================

function renderRentGrid() {

  const rentGrid = document.getElementById('rentGrid');

  if (!rentGrid) return;

  let html = '';

  for (let i = 0; i < 9; i++) {

    html += `
      <div class="col-md-4">

        <div class="card property-card h-100">

          <div class="img-wrapper">

            <span class="badge-type bg-success">
              For Rent
            </span>

            <img src="${rentImages[i]}" alt="Rental">

            <button 
              class="fav-btn" 
              onclick="toggleFav(this)"
            >
              <i class="fa-solid fa-heart"></i>
            </button>

          </div>

          <div class="card-body p-4">

            <div class="price-tag text-success mb-1">
              PKR ${50 + i * 6},000 / mo
            </div>

            <h5 class="card-title text-dark fw-bold">
              Executive Suite ${i + 1}
            </h5>

            <p class="text-muted small mb-2">
              <i class="fa-solid fa-location-dot text-danger me-1"></i>
              Gulberg, Lahore
            </p>

            <a 
              href="property-detail.html" 
              class="btn btn-outline-success w-100 rounded-pill mt-2 fw-semibold"
            >
              View Details
            </a>

          </div>

        </div>

      </div>
    `;
  }

  rentGrid.innerHTML = html;
}


// ==========================================
// FAVOURITE PAGE
// ==========================================

function renderFavGrid() {

  const favGrid = document.getElementById('favGrid');

  if (!favGrid) return;

  let html = '';

  for (let i = 0; i < 9; i++) {

    html += `
      <div class="col-md-4 fav-item-card">

        <div class="card property-card h-100">

          <div class="img-wrapper">

            <span class="badge-type badge-fav">
              Saved
            </span>

            <img 
              src="${buyImages[i]}" 
              alt="Saved Property"
            >

            <button 
              class="fav-btn active" 
              onclick="removeFavItem(this)"
            >
              <i class="fa-solid fa-heart"></i>
            </button>

          </div>

          <div class="card-body p-4">

            <h5 class="card-title text-dark fw-bold">
              Saved Villa Unit ${i + 1}
            </h5>

            <div class="row g-2 mt-2">

              <div class="col-8">

                <a 
                  href="property-detail.html" 
                  class="btn btn-outline-primary w-100 rounded-pill btn-sm py-2"
                >
                  Details
                </a>

              </div>

              <div class="col-4">

                <button 
                  class="btn btn-danger btn-sm w-100 rounded-pill py-2"
                  onclick="removeFavItem(this)"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    `;
  }

  favGrid.innerHTML = html;

  updateFavCounter();
}


// ==========================================
// REMOVE FAVOURITE
// ==========================================

function removeFavItem(btn) {

  const card = btn.closest('.fav-item-card');

  if (!card) return;

  card.style.transition = "all 0.3s ease";
  card.style.opacity = "0";
  card.style.transform = "scale(0.95)";

  setTimeout(() => {

    card.remove();

    updateFavCounter();

  }, 300);
}


// Update Favourite Counter

function updateFavCounter() {

  const counter = document.getElementById('favCounter');
  const emptyState = document.getElementById('emptyFavState');

  const items = document.querySelectorAll('.fav-item-card').length;

  if (counter) {
    counter.innerText = items;
  }

  if (emptyState) {

    emptyState.style.display =
      items === 0 ? 'block' : 'none';

  }

}


// ==========================================
// FAVOURITE TOGGLE
// ==========================================

function toggleFav(btn) {

  if (!btn) return;

  btn.classList.toggle('active');

}


// ==========================================
// PROPERTY DETAIL IMAGE
// ==========================================

function changeImage(src, thumb) {

  const mainImg = document.getElementById('mainImage');

  if (mainImg) {
    mainImg.src = src;
  }

  document
    .querySelectorAll('.thumb-img')
    .forEach(img => {
      img.classList.remove('active');
    });

  if (thumb) {
    thumb.classList.add('active');
  }

}


// ==========================================
// NEWSLETTER
// ==========================================

(function () {

  const form =
    document.getElementById("creativeNewsletterForm");

  const planeIcon =
    document.getElementById("planeIcon");

  if (!form || !planeIcon) return;


  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const emailField =
      document.getElementById("newsletterEmailField");

    const submitBtn =
      form.querySelector(".subscribe-action-btn");

    if (!emailField || !submitBtn) return;


    const btnText =
      submitBtn.querySelector(".btn-text");

    const spinner =
      submitBtn.querySelector(".spinner-border");


    if (emailField.value.trim() !== "") {

      // Plane animation
      planeIcon.classList.add("fly-away");


      // Loading state
      if (btnText) {
        btnText.style.opacity = "0.5";
      }

      if (spinner) {
        spinner.classList.remove("d-none");
      }

      submitBtn.disabled = true;


      setTimeout(() => {

        if (spinner) {
          spinner.classList.add("d-none");
        }

        if (btnText) {
          btnText.style.opacity = "1";
          btnText.innerHTML =
            '<i class="bi bi-shield-fill-check"></i> Subscribed!';
        }


        submitBtn.style.setProperty(
          "background",
          "#2ec4b6",
          "important"
        );

        submitBtn.style.boxShadow =
          "0 8px 20px rgba(46, 196, 182, 0.35)";


        setTimeout(() => {

          planeIcon.classList.remove("fly-away");

          if (btnText) {
            btnText.innerHTML = "Subscribe";
          }

          submitBtn.style.setProperty(
            "background",
            "#0d6efd",
            "important"
          );

          submitBtn.style.boxShadow = "";

          submitBtn.disabled = false;

          emailField.value = "";

        }, 3000);

      }, 1100);

    }

  });

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

