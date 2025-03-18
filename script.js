// Get all image elements with the class "clickable"
const images = document.querySelectorAll('.clickable');
const modal = document.querySelector('.modal');
const expandedImg = document.getElementById('expandedImg');
const closeBtn = document.querySelector('.close');

// Loop through each image and add a click event listener
images.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block'; // Show the modal
        expandedImg.src = img.src; // Set the src of the expanded image to the clicked image's src
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Optional: Close the modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});