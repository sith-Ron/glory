function setupImageUpload(imageId, labelId) {
    document.getElementById(imageId).addEventListener('click', function() {
        var input = document.createElement('input');
        input.type = 'file';

        input.click();

        input.addEventListener('change', function() {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var image = document.getElementById(imageId);
                    image.src = e.target.result;

                    // Set your desired width and height for the uploaded image
                    image.style.width = '500px';
                    image.style.height = '250px';
                };

                reader.readAsDataURL(input.files[0]);
            }
        });
    });
}

// Call the function for the first image
setupImageUpload('userImage1', 'imageInputLabel1');

// Call the function for the second image
setupImageUpload('userImage2', 'imageInputLabel2');

// Call the function for the third image
setupImageUpload('userImage3', 'imageInputLabel3');

// Call the function for the fourth image
setupImageUpload('userImage4', 'imageInputLabel4');

// Call the function for the fifth image
setupImageUpload('userImage5', 'imageInputLabel5');