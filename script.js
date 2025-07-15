// Registration form handler (demo purpose)
document.addEventListener('DOMContentLoaded', function () {
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('formMessage').textContent =
        "Thank you for registering! Our team will review your details.";
      regForm.reset();
    });
  }

  // Login form logic (static demo)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const userType = loginForm.user_type.value;
      const username = loginForm.username.value;
      const password = loginForm.password.value;
      // Demo credentials, do not use in production
      if (userType === 'admin' && username === "admin" && password === "admin123") {
        document.getElementById('loginMessage').textContent = "Welcome, Admin!";
      } else if (userType === 'user' && username && password) {
        document.getElementById('loginMessage').textContent = "Welcome, User!";
      } else {
        document.getElementById('loginMessage').textContent = "Login failed. Check your credentials.";
      }
      loginForm.reset();
    });
  }
});
