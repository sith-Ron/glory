// JavaScript function to handle the SVG icon click and detect user's location
document.getElementById("location-link").addEventListener("click", function () {
    // Check if Geolocation is available in the user's browser
    if ("geolocation" in navigator) {
        // Use the Geolocation API to get the user's location
        navigator.geolocation.getCurrentPosition(function (position) {
            // Get the user's latitude and longitude
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // You can use the latitude and longitude to display or do something with the user's location
            alert("Your location: Latitude " + latitude + ", Longitude " + longitude);
        }, function (error) {
            // Handle errors, e.g., if the user denies location access
            alert("Error getting location: " + error.message);
        });
    } else {
        // Geolocation is not available in this browser
        alert("Geolocation is not supported in your browser.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const userImage = document.getElementById("user-image");

    // Function to handle changing the user image
    userImage.addEventListener("click", function() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    userImage.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });

    // Function to handle rating stars
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            for (let i = 0; i < stars.length; i++) {
                stars[i].classList.remove("active");
            }
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("active");
            }
        });
    });
});

const userIcon = document.querySelector(".bi-person-circle");
const imageInput = document.getElementById("image-input");

userIcon.addEventListener("click", function () {
    imageInput.click();
});

imageInput.addEventListener("change", function () {
    const selectedFile = imageInput.files[0];
    if (selectedFile) {
        // Here, you can handle the selected image, e.g., display it as the user's profile picture.
        const profileImage = document.querySelector(".bi-person-circle");
        const imageURL = URL.createObjectURL(selectedFile);
        profileImage.setAttribute("xlink:href", imageURL); // Update the profile image with the selected image
    }
});