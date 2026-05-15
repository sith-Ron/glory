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