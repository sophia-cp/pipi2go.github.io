const SITE_PASSWORD = "moin123"; 
// CHANGE THIS to your own password

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  if (input === SITE_PASSWORD) {
    sessionStorage.setItem("siteAccess", "granted");
    window.location.href = "home.html";
  } else {
    errorMessage.textContent = "wrong password ♡ try again";
  }
}

function protectPage() {
  const access = sessionStorage.getItem("siteAccess");

  if (access !== "granted") {
    window.location.href = "index.html";
  }
}

// Allow pressing Enter on password field
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("passwordInput");

  if (passwordInput) {
    passwordInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        checkPassword();
      }
    });
  }
});