document.addEventListener("DOMContentLoaded", () => {
  const pw = "foxp3";
  const authContainer = document.querySelector(".auth-container");
  const passwordInput = document.querySelector(".password-input");
  const loginBtn = document.querySelector(".login-btn");
  const lockedContent = document.querySelector(".locked-content");

  function onLoginSuccess() {
    authContainer.style.display = "none";
    lockedContent.style.display = "block";
  }

  function showLogin() {
    authContainer.style.display = "block";
    lockedContent.style.display = "none";
  }

  if (sessionStorage.getItem("auth") === "true") {
    onLoginSuccess();
  } else {
    showLogin();
  }

  loginBtn.addEventListener("click", () => {
    const enteredPass = passwordInput.value;
    if (enteredPass === pw) {
      sessionStorage.setItem("auth", "true");
      onLoginSuccess();
    }
  });

  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      loginBtn.click();
    }
  });
});