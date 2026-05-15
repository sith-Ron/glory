/* JavaScript code for the lightbox effect */

// Function to display an image in a lightbox
function openImage(imageId) {
    const image = document.getElementById(imageId);
    const overlay = document.createElement('div');
    overlay.id = 'imageOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    enlargedImage.style.maxWidth = '90%';
    enlargedImage.style.maxHeight = '90%';
    enlargedImage.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

    overlay.appendChild(enlargedImage);
    document.body.appendChild(overlay);

    // Close the lightbox when clicked outside the image
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
}

// Add click event listeners to the images
document.getElementById('leftImage').addEventListener('click', () => openImage('leftImage'));
document.getElementById('topImage').addEventListener('click', () => openImage('topImage'));
document.getElementById('bottomImage').addEventListener('click', () => openImage('bottomImage'));

// Get a reference to the button element
var button = document.getElementById("myButton");

// Add a click event listener to the button
button.addEventListener("click", function () {
    // Prevent the default behavior of a button in a form (prevents a form submission)
    event.preventDefault();

    // Add a CSS class to keep the outline after clicking
    button.classList.add("active");

    // Define the URL you want to navigate to
    var link = "MalaccaFourthHouse.html"; // Replace with the URL of your photo gallery

    // Open the link in a new tab
    window.open(link, "_blank");
});

// Get the "love" icon by its id
const loveIcon = document.getElementById("love-icon");

// Initialize a variable to track the color state
let isPink = false;

// Add a click event listener
loveIcon.addEventListener("click", function() {
    // Toggle the color between pink and the original color
    if (isPink) {
        loveIcon.style.fill = "#B0AFAF"; // Set it to the original color
    } else {
        loveIcon.style.fill = "pink"; // Set it to pink
    }

    // Toggle the color state
    isPink = !isPink;
});

// Function to toggle the color of the share icon
function toggleShareIconColor() {
    const shareIcon = document.getElementById("share-icon");

    // Get the current fill color
    const currentColor = shareIcon.getAttribute("fill");

    // Toggle the color between red and green
    if (currentColor === "#B0AFAF") {
        shareIcon.setAttribute("fill", "#B0AFAF"); // Change to red when clicked
    } else {
        shareIcon.setAttribute("fill", "#B0AFAF"); // Change back to the original color
    }
}

// Function to handle sharing when the share icon is clicked
function sharePage() {
    // Replace this with the actual sharing functionality, such as opening share options for social media platforms.
    // For demonstration, you can use the JavaScript `alert` function.
    alert("Share this page on social media");
}

// Add a click event listener to the share icon
const shareIcon = document.getElementById("share-icon");
shareIcon.addEventListener("click", function () {
    toggleShareIconColor();
    sharePage();
});