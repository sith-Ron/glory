// Get a reference to the house plan view image
const housePlanView = document.getElementById('house-plan-view');
const largerImageContainer = document.getElementById('larger-image-container'); // Add this line

// When the house plan view is clicked, show the larger image
housePlanView.addEventListener('click', () => {
    // Hide the small image
    housePlanView.style.display = 'none';
    // Show the larger image container
    largerImageContainer.style.display = 'flex'; // Display the container
});

// When the larger image or the background is clicked, hide the larger image
largerImageContainer.addEventListener('click', (event) => {
    if (event.target === largerImageContainer || event.target.className === 'larger-house-plan-view') {
        // Show the small image again
        housePlanView.style.display = 'block'; // Display the small image
        // Hide the larger image container
        largerImageContainer.style.display = 'none';
    }
});