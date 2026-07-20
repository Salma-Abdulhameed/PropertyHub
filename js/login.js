// ===================================================
// PROPERTYHUB - LOGIN INTERACTION & PASSWORD TOGGLE
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
  
  // Elements Selection
  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  const passwordInput = document.getElementById("userPassword");
  const eyeIcon = document.getElementById("eyeIcon");
  const loginForm = document.getElementById("propertyHubLoginForm");

  // 1. Password Visibility Toggle Logic
  if (togglePasswordBtn && passwordInput && eyeIcon) {
    togglePasswordBtn.addEventListener("click", function () {
      // Current type fetch karein
      const currentType = passwordInput.getAttribute("type");
      
      if (currentType === "password") {
        // Change to text input to show password
        passwordInput.setAttribute("type", "text");
        eyeIcon.classList.remove("bi-eye");
        eyeIcon.classList.add("bi-eye-slash");
      } else {
        // Change back to password input to hide it
        passwordInput.setAttribute("type", "password");
        eyeIcon.classList.remove("bi-eye-slash");
        eyeIcon.classList.add("bi-eye");
      }
    });
  }

  // 2. Form Submission Handling (Prevents empty or faulty reloads)
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      // Filter any custom validation rules here if needed in future
      const emailField = document.getElementById("userEmail");
      
      if (emailField && emailField.value.trim() === "") {
        e.preventDefault();
        alert("Please enter a valid email address.");
      }
    });
  }

});