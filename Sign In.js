// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('#togglePassword i');

    if (passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        passwordInput.setAttribute('type', 'password');
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}

// Attach the event listener for the eye icon button click
document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButton = document.getElementById('togglePassword');
    togglePasswordButton.addEventListener('click', togglePasswordVisibility);
});