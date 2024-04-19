/* This is the javascript for books.html */

/* Slide Show */
const images = ["image/Books/1.jpeg", "image/Books/2.jpeg", "image/Books/3.jpeg", 
"image/Books/4.jpeg", "image/Books/5.jpeg"];
let currentImageIndex = 0;
const slideshowImage = document.getElementById("slideshow-image");

// Change to the next page every 2 seconds
setInterval(() => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  slideshowImage.src = images[currentImageIndex];
  slideshowImage.style.display = "block";
}, 2000);
