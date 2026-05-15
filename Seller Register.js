function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.classList.remove("fa-eye-slash");
        passwordToggle.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        passwordToggle.classList.remove("fa-eye");
        passwordToggle.classList.add("fa-eye-slash");
    }
}