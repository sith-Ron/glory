// Get references to the buttons
const searchButton = document.getElementById("searchButton");
const chatButton = document.getElementById("chatButton");

// Add a click event listener to the "Search" button
searchButton.addEventListener("click", function() {
    searchButton.style.backgroundColor = "#E9FC9F"; // Change background color
});

// Add a click event listener to the "Chat with Bot" button
chatButton.addEventListener("click", function() {
    chatButton.style.backgroundColor = "grey"; // Change background color to grey
});