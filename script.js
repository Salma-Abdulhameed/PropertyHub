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

document.addEventListener('DOMContentLoaded', () => {
  renderBuyGrid();
  renderRentGrid();
  renderFavGrid();
});

// Render Buy Page
function renderBuyGrid() {
  const buyGrid = document.getElementById('buyGrid');
  if (!buyGrid) return;

  let html = '';
  for (let i = 0; i < 9; i++) {
    html += `
    <div class="col-md-4">
      <div class="card property-card h-100">
        <div class="img-wrapper">
          <span class="badge-type">For Sale</span>
          <img src="${buyImages[i]}" alt="Property">
          <button class="fav-btn active" onclick="toggleFav(this)"><i class="fa-solid fa-heart"></i></button>
        </div>
        <div class="card-body p-4">
          <div class="price-tag mb-1">PKR ${(1.8 + i*0.4).toFixed(1)} Crore</div>
          <h5 class="card-title text-dark fw-bold">Luxury Villa - Unit ${i+1}</h5>
          <p class="text-muted small mb-2"><i class="fa-solid fa-location-dot text-danger me-1"></i> DHA Lahore</p>
          <a href="property-detail.html" class="btn btn-outline-primary w-100 rounded-pill mt-2 fw-semibold">View Details</a>
        </div>
      </div>
    </div>`;
  }
  buyGrid.innerHTML = html;
}

// Render Rent Page
function renderRentGrid() {
  const rentGrid = document.getElementById('rentGrid');
  if (!rentGrid) return;

  let html = '';
  for (let i = 0; i < 9; i++) {
    html += `
    <div class="col-md-4">
      <div class="card property-card h-100">
        <div class="img-wrapper">
          <span class="badge-type bg-success">For Rent</span>
          <img src="${rentImages[i]}" alt="Rental">
          <button class="fav-btn" onclick="toggleFav(this)"><i class="fa-solid fa-heart"></i></button>
        </div>
        <div class="card-body p-4">
          <div class="price-tag text-success mb-1">PKR ${50 + i*6},000 / mo</div>
          <h5 class="card-title text-dark fw-bold">Executive Suite ${i+1}</h5>
          <p class="text-muted small mb-2"><i class="fa-solid fa-location-dot text-danger me-1"></i> Gulberg, Lahore</p>
          <a href="property-detail.html" class="btn btn-outline-success w-100 rounded-pill mt-2 fw-semibold">View Details</a>
        </div>
      </div>
    </div>`;
  }
  rentGrid.innerHTML = html;
}

// Render Favorites Page
function renderFavGrid() {
  const favGrid = document.getElementById('favGrid');
  if (!favGrid) return;

  let html = '';
  for (let i = 0; i < 9; i++) {
    html += `
    <div class="col-md-4 fav-item-card">
      <div class="card property-card h-100">
        <div class="img-wrapper">
          <span class="badge-type badge-fav">Saved</span>
          <img src="${buyImages[i]}" alt="Saved Property">
          <button class="fav-btn active" onclick="removeFavItem(this)"><i class="fa-solid fa-heart"></i></button>
        </div>
        <div class="card-body p-4">
          <h5 class="card-title text-dark fw-bold">Saved Villa Unit ${i+1}</h5>
          <div class="row g-2 mt-2">
            <div class="col-8">
              <a href="property-detail.html" class="btn btn-outline-primary w-100 rounded-pill btn-sm py-2">Details</a>
            </div>
            <div class="col-4">
              <button class="btn btn-danger btn-sm w-100 rounded-pill py-2" onclick="removeFavItem(this)"><i class="fa-solid fa-trash-can"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
  favGrid.innerHTML = html;
}

function removeFavItem(btn) {
  const card = btn.closest('.fav-item-card');
  if (card) {
    card.style.transition = "all 0.3s ease";
    card.style.opacity = "0";
    setTimeout(() => {
      card.remove();
      const counter = document.getElementById('favCounter');
      const emptyState = document.getElementById('emptyFavState');
      const items = document.querySelectorAll('.fav-item-card').length;
      if (counter) counter.innerText = items;
      if (emptyState) emptyState.style.display = items === 0 ? 'block' : 'none';
    }, 300);
  }
}

function toggleFav(btn) {
  btn.classList.toggle('active');
}

function changeImage(src, thumb) {
  const mainImg = document.getElementById('mainImage');
  if (mainImg) mainImg.src = src;
  document.querySelectorAll('.thumb-img').forEach(img => img.classList.remove('active'));
  if (thumb) thumb.classList.add('active');
}