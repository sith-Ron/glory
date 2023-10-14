// Function to toggle password visibility
function togglePasswordVisibility(inputId, errorId) {
    const passwordInput = document.getElementById(inputId);
    const passwordError = document.getElementById(errorId);

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    const eyeIcon = document.querySelector(`#${inputId}Toggle i`);
    if (type === 'password') {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        passwordError.textContent = '';
    } else {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}

// Attach the event listener for the eye icon button click for Password form
document.addEventListener('DOMContentLoaded', function () {
    const togglePasswordButton = document.getElementById('togglePassword');
    togglePasswordButton.addEventListener('click', () => togglePasswordVisibility('password', 'passwordError'));
});

// Attach the event listener for the eye icon button click for RE: Type Password form
document.addEventListener('DOMContentLoaded', function () {
    const toggleRetypePasswordButton = document.getElementById('toggleRetypePassword');
    toggleRetypePasswordButton.addEventListener('click', () => togglePasswordVisibility('retypePassword', 'retypePasswordError'));
});

// Function to validate password match in RE: Type Password
function validatePassword() {
    const password = document.getElementById('password').value;
    const retypePassword = document.getElementById('retypePassword').value;
    const retypePasswordError = document.getElementById('retypePasswordError');

    if (password !== retypePassword) {
        retypePasswordError.textContent = 'Passwords do not match';
        return false;
    }

    return true;
}
