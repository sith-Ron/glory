// JavaScript for Calendar Icon Functionality
document.addEventListener("DOMContentLoaded", function() {
    const calendarIcon = document.getElementById("calendar-icon");
    const dateInput = document.getElementById("date");

    calendarIcon.addEventListener("click", function() {
        dateInput.focus();
    });

    dateInput.addEventListener("focus", function() {
        // Show a date picker or any other date selection logic you prefer
        // For simplicity, you can use the browser's default date picker
        dateInput.type = "date";
    });
});

// JavaScript for User Icon Functionality
document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.getElementById("user-icon");
    const userImageInput = document.getElementById("user-image-input");

    userIcon.addEventListener("click", function() {
        userImageInput.click(); // Trigger the hidden file input when the icon is clicked
    });

    userImageInput.addEventListener("change", function() {
        const file = userImageInput.files[0];
        if (file) {
            // Display the selected image in the user icon
            const reader = new FileReader();
            reader.onload = function(e) {
                userIcon.style.backgroundImage = `url(${e.target.result})`;
                userIcon.style.backgroundSize = "cover";
                userIcon.style.color = "transparent";
            };
            reader.readAsDataURL(file);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const changePictureButton = document.getElementById("change-picture");
    const userImageInput = document.getElementById("user-image-input");

    changePictureButton.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the link from navigating

        // Trigger the hidden file input when the button is clicked
        userImageInput.click();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the scroll-up button
    const scrollUpButton = document.getElementById("scroll-up-button");

    // Add a click event listener to the button
    scrollUpButton.addEventListener("click", function() {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    });
});